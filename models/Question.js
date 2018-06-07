const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    text: {
        type: String,
        unique: true,
        required: true
    },
    answers: [{
        value: {
            type: String,
            required: true,
            unique: true
        },
        score: {
            type: Number,
            required: true,
            unique: true
        }
    }]
})