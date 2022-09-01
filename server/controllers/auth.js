require('dotenv').config()
const bcrypt = require('bcrypt')
const con = require('../db')
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
                        const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' })
                        const refreshToken = jwt.sign({ username }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' })
                        // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
                        // res.cookie('token', token, {
                        //     httpOnly: true,
                        // })
                        // res.status(200).send('You are logged in!')
                        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
                        res.json({ success: true, err: null, accessToken })
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

const refreshToken = (req, res) => {
    // const cookies = req.cookies;
    // if (!cookies?.jwt) return res.status(401).send('Unauthorized');
    // console.log(cookies.jwt)
    // const refreshToken = cookies.jwt

    // const checkUserExists = con.query("SELECT * from users WHERE username = ?", [username], (err, result, fields) => {
    //     if (err) {
    //         res.status(500).send(err)
    //     }
    //     if (result.length !== 0) {
    //         const validatePassword = async () => {
    //             const currentPassword = result[0].password;
    //             const match = await bcrypt.compare(password, currentPassword)
    //             if (match) {
    //                 const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10s' })
    //                 const refreshToken = jwt.sign({ username }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' })
    //                 // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    //                 // res.cookie('token', token, {
    //                 //     httpOnly: true,
    //                 // })
    //                 // res.status(200).send('You are logged in!')
    //                 res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
    //                 res.json({ success: true, err: null, accessToken })
    //             } else {
    //                 res.status(500).send('Password does not match.')
    //             }

    //         }
    //         validatePassword();

    //     }
    //     else {
    //         res.status(401).send('Username does not exist');
    //     }
    // });
}

module.exports = { login, register, refreshToken }