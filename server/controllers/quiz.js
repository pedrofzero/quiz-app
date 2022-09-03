const QuizModel = require('../models/quiz')
const UserModel = require('../models/users')

const createQuiz = async (req, res) => {

    const { name, description, category, questions, creator, image } = req.body

    try {
        UserModel.findOne({ username: creator }, (err, user) => {
            if (err) res.status(401).send(err)
            if (!user) res.status(401).send('Unauthorized. User does not exist.')

            if (user) {
                const createQuiz = async () => {
                    const newQuiz = await QuizModel.create({ name: name, description: description, category: category, creator: user._id, questions: questions }, (err, quiz) => {
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

const getQuizes = async (req, res) => {
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

const getQuizById = async (req, res) => {
    const id = req.body.id;
    try {
        QuizModel.findOne({ id: id }, (err, quiz) => {
            if (err) res.status(401);
            if (quiz) {
                res.status(201).send(quiz)
            }
        })
    } catch {

    }
}

const getRandomQuiz = async (req, res) => {
    await QuizModel.aggregate([{ $sample: { size: 1 } }], (err, result) => {
        res.send(result)
    })
        // let random = Math.floor(Math.random * count)
        // QuizModel.findOne().skip(random).exec((err, result => {
        //     console.log(result)
        //     res.send(result)
        // }))
    }


module.exports = { createQuiz, getQuizes, getQuizById, getRandomQuiz }