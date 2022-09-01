const router = require('express').Router()
const { createUser, getUsers, login } = require('../controllers/users')
const verifyJWT = require('../middleware/verifyJWT')


router.get('/', verifyJWT, getUsers)

module.exports = router