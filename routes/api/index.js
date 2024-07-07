const express = require('express')
const router = express.Router()

const users = require('./users')
const uploadRouter = require('./upload');

router.get('/', (req, res) => {
    res.send('API V1')
})

router.use('/users', users)
router.use('/upload', uploadRouter);

module.exports = router