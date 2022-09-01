const { login, register, refreshToken } = require('../controllers/auth')
const router = require('express').Router()

router.post('/login', login)
router.post('/verify', refreshToken)
router.post('/register', register)
router.post('')

module.exports = router