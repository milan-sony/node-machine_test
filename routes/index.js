const express = require('express');
const router = express.Router();

const api = require('./api')

router.get('/', (req, res) => {
    res.json({
        status: 200,
        message: 'This API is working properly'
    });
});

router.use('/api/v1', api)

module.exports = router;