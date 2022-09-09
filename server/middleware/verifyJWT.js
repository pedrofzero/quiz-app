const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) { return res.status(401).send("You don't have authorization to access this content.") }
    // console.log(authHeader)
    const token = authHeader.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(401).send("Unauthorized"); // invalid token
        req.user = decoded.username
        next()
    })
}

module.exports = verifyJWT