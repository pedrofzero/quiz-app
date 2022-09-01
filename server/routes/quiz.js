const { createQuiz } = require('../controllers/quiz')
const verifyJWT = require('../middleware/verifyJWT')
const router = require('express').Router()

router.post('/createQuiz', verifyJWT, createQuiz)


module.exports = router