const UserModel = require('../models/users')

const getUsers = async (req, res) => {
    try {
        UserModel.find((err, users) => {
            if (err) { res.send(err) }
            if (users) {
                console.log(users)
                res.status(201).send(users)
            }
        })

    } catch {

    }
}

const getUserById = async (req, res) => {
    const id = req.body.id;

    try {
        UserModel.findById(id, (err, result) => {
            if (err) res.send(err)
            if (result) {
                res.send(result.username)
            }
        })
    } catch {

    }
}

module.exports = { getUsers, getUserById }