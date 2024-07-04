const express = require('express')
const router = express.Router()

const users = require('../../models/user_model');


router.post('/', async (req, res) => {
    try {
        // console.log(req.body)

        let { username, email, password } = req.body

        const newUser = new users({
            username: username,
            email: email,
            password: password
        });
        await newUser.save();
        res.json({
            status: 200,
            message: "Data added successfully"
        });
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
})


router.get('/', (req, res) => {
    res.json({
        status: 200,
        message: 'users data'
    })
})

module.exports = router