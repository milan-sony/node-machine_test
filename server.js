// env
require('dotenv').config();

const express = require('express')
const app = express();


app.get('/', (req, res) => {
    res.send('Welcome');
});


app.listen((process.env.PORT || 3000), () => {
    console.log(`\nServer listening on port ${process.env.PORT || 3000}`)
});