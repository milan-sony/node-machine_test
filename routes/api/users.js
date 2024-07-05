const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const users = require('../../models/user_model');


// user signup
router.post('/signup', async (req, res) => {
    try {
        let { username, email, password } = req.body

        let user = await users.findOne({ username: username, email: email })

        if (password.length < 8) {
            return res.status(400).json({
                status: 400,
                message: 'Password should be atleast 8 characters long'
            })
        } else if (password.search(/[a-z]/i) < 0) {
            return res.status(400).json({
                status: 400,
                message: 'Password should contain atleast one letter'
            })
        } else if (password.search(/[0-9]/) < 0) {
            return res.status(400).json({
                status: 400,
                message: 'Password should contain atleast one digit'
            })
        }

        if (user) {
            return res.json({
                status: 400,
                message: "User with this E-mail and password already exists"
            })

        } else {
            const salt = await bcrypt.genSalt(10)
            const salt_password = await bcrypt.hash(password, salt)

            const newUser = new users({
                username: username,
                email: email,
                password: salt_password
            })

            await newUser.save()

            res.json({
                status: 200,
                message: "User added successfully"
            })
        }
    } catch (err) {
        return res.status(500).json({
            message: `Failed to create user, ${err}`
        })
    }
})


// user login
router.post('/login', (req, res) => {
    res.send('login')
})


router.get('/', (req, res) => {
    res.json({
        status: 200,
        message: 'all users data'
    })
})

module.exports = router