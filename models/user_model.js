const mongoose = require('mongoose');
import { nanoid } from 'nanoid'


const usersSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        unique: true,
        default: nanoid()
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('users', usersSchema);