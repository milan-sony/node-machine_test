const express = require('express')
const router = express.Router()

const Users = require('../../models/user_model')

const verifyToken = require('../../middlewares/authentication')

router.get('/', verifyToken, async (req, res) => {
    // console.log(req.body)
    // console.log(req.user.user_id)
    let user = await Users.findOne({ user_id: req.user.user_id })
        .catch(err => {
            res.send(400).json({
                status: 400,
                message: 'Error retreving the user',
                error: err
            })
        })

    res.status(200).json({
        status: 200,
        message: 'User retrieved successfully',
        data: user
    });
})

module.exports = router