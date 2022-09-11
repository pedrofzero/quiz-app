const QuizModel = require('../models/quiz')
const UserModel = require('../models/users')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        Date.now() + path.extname(file.originalname)
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '5000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extName = fileTypes.test(path.extname(file.originalname))

        if (mimeType && extName) {
            return cb(null, true)
        }
        cb('Give proper file.')
    }
}).single('image')


const createQuiz = async (req, res) => {

    const { file, name, description, category, questions, creator, image } = req.body

    try {
        UserModel.findOne({ username: creator }, (err, user) => {
            if (err) res.status(401).send(err)
            if (!user) res.status(401).send('Unauthorized. User does not exist.')

            if (user) {

                const createQuiz = async () => {
                    const newQuiz = await QuizModel.create({ image: file, name: name, description: description, category: category, creator: user._id, questions: questions, image: image }, (err, quiz) => {
                        if (err) { console.log(err); res.status(401).send(err); }
                        if (quiz) {
                            res.status(201).send('Quiz created successfully.')
                        }
                    }

                    )

                }
                createQuiz()

            }
        })

    } catch {

    }
}

const getQuizesByUser = async (req, res) => {
    const username = req.body.username;
    let userID;
    try {
        await UserModel.findOne({ username: username }, (err, user) => {
            if (err) res.status(401);
            if (user) {
                userID = user._id
                QuizModel.find({ creator: user._id }, (err, user) => {
                    res.send(user)
                })
            }
        })
    } catch {

    }

    // const getuser = await QuizModel.findById({ creator: username })
}

const deleteQuiz = async (req, res) => {
    const { user, quizID } = req.body
    try {
        UserModel.findOne({ username: user }, (err, user) => {
            if (err) res.send(err)
            if (user) {
                QuizModel.deleteOne({ creator: user, _id: quizID }, (err, succ) => {
                    if (err) res.send(err)
                    if (succ) res.send(succ)
                })
            }
        })

    } catch {

    }
}

const getQuizById = async (req, res) => {
    const id = req.body.id;
    try {
        QuizModel.findById(id, (err, quiz) => {
            if (err) res.status(401);
            if (quiz) {
                console.log(quiz)
                res.status(201).send(quiz)
            }
        })
    } catch {

    }
}

const getQuizByNum = async (req, res) => {
    const amount = req.body.amount;

    await QuizModel.aggregate([{ $sample: { size: amount } }], (err, result) => {
        res.send(result)
    })
    // let random = Math.floor(Math.random * count)
    // QuizModel.findOne().skip(random).exec((err, result => {
    //     console.log(result)
    //     res.send(result)
    // }))
}

const updateTimesPlayed = async (req, res) => {
    const id = req.body.id;
    try {
        QuizModel.findByIdAndUpdate(id, { $inc: {timesPlayed: 1} }, (err, result) => {
            if (err) res.send(err)
            if (result) {
                res.send(result)
            }
        })
    } catch {

    }
}


module.exports = { createQuiz, getQuizesByUser, getQuizById, getQuizByNum, deleteQuiz, updateTimesPlayed, upload }