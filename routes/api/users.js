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

        // check if user with same email and password exists
        if (user) {
            return res.send(400).json({
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
router.post('/login', async (req, res) => {
    try {
        let { email, password } = req.body

        // check if user email exist
        let user = await users.findOne({ email })

        if (!user) {
            return res.status(401).json({
                status: 401,
                message: "User not found"
            })
        }

        // Check if password is correct
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({
                status: 401,
                message: "Invalid password"
            })
        }

        // Create and assign a token to the user
        const token = jwt.sign({ email: email, user_id: user.user_id }, process.env.TOKEN_SECRET, {
            expiresIn: '24h'
        })

        res.status(200).json({
            status: 200,
            message: 'User logged in successfully',
            token: token
        })
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: `Internal server error ${err}`
        })
    }
})

module.exports = router