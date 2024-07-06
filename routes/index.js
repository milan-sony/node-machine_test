const express = require('express');
const router = express.Router();

const api = require('./api')
const auth = require('./auth')

router.use('/api/v1', api)
router.use('/auth', auth);

router.get('/', (req, res) => {
    res.send(200).json({
        status: 200,
        message: 'This API is working properly'
    });
});

module.exports = router;