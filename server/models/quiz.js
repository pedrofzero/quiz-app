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
    image: {
        type: String,
        required: false
    },
    timesPlayed: {
        type: Number,
        required: true,
        default: 0
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
            wrongAnswer1: {
                type: String,
                required: true,
                maxLength: 50
            },
            wrongAnswer2: {
                type: String,
                required: true,
                maxLength: 50
            },
            wrongAnswer3: {
                type: String,
                required: true,
                maxLength: 50
            },
        }
    ]
})

const QuizModel = mongoose.model('quizes', quizSchema)

module.exports = QuizModel