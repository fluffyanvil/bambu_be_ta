const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    scores: {
        type: [Number],
        required: false
    },
    profile: {
        type: String,
        required: false
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User