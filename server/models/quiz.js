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

                // answers: [
                //     {
                //         answer: {
                //             type: String,
                //             required: true,
                //         },
                //         isCorrect: {
                //             type: String,
                //             required: true,
                //         }
                //     }
                // ],
                // answer: {
                //     type: String,
                //     required: true,
                //     maxLength: 50
                // },
                // wrongAnswer1: {
                //     type: String,
                //     required: true,
                //     maxLength: 50
                // },
                // wrongAnswer2: {
                //     type: String,
                //     required: true,
                //     maxLength: 50
                // },
                // wrongAnswer3: {
                //     type: String,
                //     required: true,
                //     maxLength: 50
                // },
            }



        ]
})

const QuizModel = mongoose.model('quizes', quizSchema)

module.exports = QuizModel