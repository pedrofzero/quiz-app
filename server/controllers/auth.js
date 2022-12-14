require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const fsPromises = require('fs/promises')
const path = require('path')
const mongoose = require('mongoose')
const UserModel = require('../models/users')

const ACCESS_TOKEN_EXPIRE = '15m'
const REFRESH_TOKEN_EXPIRE = '1d'

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
                res.status(400).send('Username or email does not exist.')
            } else {
                const validatePassword = async () => {
                    const currentPassword = user.password;
                    const match = await bcrypt.compare(password, currentPassword)
                    if (match) {
                        const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRE })
                        const refreshToken = jwt.sign({ username }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRE })

                        // res.cookie('access_token', accessToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
                        
                        res.cookie('refresh_token', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
                        res.json({ success: true, username, accessToken })
                    } else {
                        res.status(400).send('Password does not match.')
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

const logout = (req, res) => {
    res.cookie('refresh_token', '', { maxAge: 0 })
    res.status(200).send('Token removed successfully.')
}

const refreshToken = (req, res) => {
    const cookies = req.cookies;

    if (!cookies.refresh_token) return res.status(401).send('Unauthorized');

    jwt.verify(cookies.refresh_token, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(401);
        const accessToken = jwt.sign({ "username": decoded.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRE })
        res.json({ success: true, err: null, accessToken })

    })
}



module.exports = { login, register, logout, refreshToken }