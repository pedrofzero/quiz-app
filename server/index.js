const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')

app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
  }));

const users = []

app.get('/users', (req, res) => {
    res.json(users);
})

app.post('/createUser', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        console.log("salt: " + salt)
        console.log("hashed password: " + hashedPassword)

        const user = { name: req.body.name, password: hashedPassword }
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }

})

app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name === req.body.name)
    if (user == null) {
        return res.status(400).send("Cannot find user")
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('success')
        } else {
            res.send('not allowed')
        }
    } catch {
        res.status(500).send()
    }
})

app.listen(8000, () => {
    console.log("Server running successfully.")
})