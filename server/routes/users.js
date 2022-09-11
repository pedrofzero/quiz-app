const router = require('express').Router()
const { getUsers, getUserById } = require('../controllers/users')
const verifyJWT = require('../middleware/verifyJWT')


router.get('/', verifyJWT, getUsers)
router.post('/getUserById', verifyJWT, getUserById)


module.exports = router