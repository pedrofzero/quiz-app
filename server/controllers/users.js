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


module.exports = { getUsers }