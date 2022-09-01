const mongoose = require('mongoose')

const quizSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    questions:
    [
        {
            question: {
                type: String,
                required: true,
                maxLength: 200
            },
            timeLimit: {
                type: Number,
                required: true,
                maxLength: 2
            },
            answer: {
                type: String,
                required: true,
                maxLength: 50
            },
            question1: {
                type: String,
                required: true,
                maxLength: 50
            },
            question2: {
                type: String,
                required: true,
                maxLength: 50
            },
            question3: {
                type: String,
                required: true,
                maxLength: 50
            },
        }
    ]
})

const QuizModel = mongoose.model('quizes', quizSchema)

module.exports = QuizModel