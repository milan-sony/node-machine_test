// env
require('dotenv').config();


// express
const express = require('express')
const app = express();


// DB
const db = require('./config/db');
db.connect();

// Base URL (/)
const routes = require('./routes')
app.use('/', routes);


app.listen((process.env.PORT || 3000), () => {
    console.log(`\nServer listening on port ${process.env.PORT || 3000}`)
});