const express = require('express')
const router = express.Router()

router.post('/', (req, res) =>{
    console.log(req.body)
})


router.get('/', (req, res)=>{
    res.json({
        status: 200,
        message: 'users data'
    })
})

module.exports = router