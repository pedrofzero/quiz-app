const { createQuiz, getQuizesByUser, getQuizById, getQuizByNum, upload, deleteQuiz, updateTimesPlayed } = require('../controllers/quiz')
const verifyJWT = require('../middleware/verifyJWT')
const router = require('express').Router()

router.post('/createQuiz', upload, verifyJWT, createQuiz)
router.post('/getQuizesByUser', verifyJWT, getQuizesByUser)
router.post('/getQuizById', verifyJWT, getQuizById)
router.post('/getQuizByNum', verifyJWT, getQuizByNum)
router.post('/updateTimesPlayed', verifyJWT, updateTimesPlayed)
router.post('/deleteQuiz', verifyJWT, deleteQuiz)

module.exports = router