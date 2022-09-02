require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const fsPromises = require('fs/promises')
const path = require('path')
const mongoose = require('mongoose')
const UserModel = require('../models/users')

const login = async (req, res) => {

    const { email, username, password } = req.body;

    try {
        UserModel.findOne({
            $or: [
                { username: username },
                { email: email }
            ]
        }, (err, user) => {
            if (err) { res.send(err) }
            if (!user) {
                res.status(401).send('Username or email does not exist.')
            } else {
                const validatePassword = async () => {
                    const currentPassword = user.password;
                    const match = await bcrypt.compare(password, currentPassword)
                    if (match) {
                        const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5m' })
                        const refreshToken = jwt.sign({ username }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' })

                        // res.cookie('access_token', accessToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
                        res.cookie('refresh_token', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
                        res.json({ success: true, accessToken })
                    } else {
                        res.status(500).send('Password does not match.')
                    }
                }
                validatePassword();
            }
        })
    } catch {

    }
}

const register = async (req, res) => {

    const { email, username, password } = req.body;

    try {

        UserModel.findOne({ username: username }, (err, user) => {
            if (user) {
                res.status(401).send('User already exists.')
            } else {
                const createUser = async () => {
                    const salt = await bcrypt.genSalt(10)
                    const hashedPassword = await bcrypt.hash(password, salt)
                    const newUser = await UserModel.create({ username: username, email: email, password: hashedPassword })
                    newUser.save()
                    res.status(201).send('User registered successfully.')
                }
                createUser();
            }
        })

    } catch (err) {
        res.status(401).send(err)
        // console.log(err)
    }
}
const refreshToken = (req , res) => {
    const username = req.body.username;

    const cookies = req.cookies;
    if (!cookies.refresh_token || !username ) return res.status(401).send('Unauthorized');

    jwt.verify(cookies.refresh_token, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(403);
        const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' })
        res.json({ success: true, err: null, accessToken })
    })
}

const logout = (req, res) => {
    res.cookie('refresh_token', '', {maxAge: 0})
    res.status(201).send('Token removed successfully.')
}

module.exports = { login, register, refreshToken, logout }