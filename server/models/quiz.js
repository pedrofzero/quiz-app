const mongoose = require('mongoose');

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
        required: true
    },
    timesPlayed: {
        type: Number,
        required: true,
        default: 0
    },

    questions:
        [
            {
                timeLimit: {
                    type: Number,
                    required: true,
                    maxLength: 2
                },

                question: {
                    type: String,
                    required: true,
                    maxLength: 200
                },

                answer1:
                {
                    answer: {
                        type: String,
                        required: true,
                    },
                    isCorrect: {
                        type: String,
                        required: true,
                    }
                },

                answer2:
                {
                    answer: {
                        type: String,
                        required: true,
                    },
                    isCorrect: {
                        type: String,
                        required: true,
                    }
                },

                answer3:
                {
                    answer: {
                        type: String,
                        required: true,
                    },
                    isCorrect: {
                        type: String,
                        required: true,
                    }
                },

                answer4:
                {
                    answer: {
                        type: String,
                        required: true,
                    },
                    isCorrect: {
                        type: String,
                        required: true,
                    }
                },

            }
        ]
})

const QuizModel = mongoose.model('quizes', quizSchema)

module.exports = QuizModel