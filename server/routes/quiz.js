const { createQuiz, getQuizes, getQuizById, getRandomQuiz } = require('../controllers/quiz')
const verifyJWT = require('../middleware/verifyJWT')
const router = require('express').Router()

router.post('/createQuiz', verifyJWT, createQuiz)
router.post('/getQuizes', verifyJWT, getQuizes)
router.post('/getQuizById', verifyJWT, getQuizById)
router.get('/getRandomQuiz', verifyJWT, getRandomQuiz)

module.exports = router