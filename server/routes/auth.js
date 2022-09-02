const { login, register, refreshToken, logout } = require('../controllers/auth')
const router = require('express').Router()

router.post('/login', login)
router.post('/register', register)
router.get('/refreshToken', refreshToken)
router.get('/logout', logout)

module.exports = router