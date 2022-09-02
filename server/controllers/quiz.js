const QuizModel = require('../models/quiz')

const createQuiz = async (req, res) => {

    const { name, description, category, questions } = req.body

    try {
        const newQuiz = await QuizModel.create({
            name: name, description: description, category: category, description: description, creator: '630fe297ede698edce26c34b', questions: questions
        }, (err, quiz) => {
            if (err) { console.log(err); res.status(401).send(err); }
            if (quiz) {
                res.send(quiz)
                console.log(quiz)
            }
        })
        newQuiz.save()
        res.status(201).send('Quiz created successfully.')
    } catch {

    }
}


module.exports = { createQuiz }