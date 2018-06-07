const mongoose = require('mongoose')

const optionSchema = new mongoose.Schema({
    value: {
            type: String,
            required: true
    },
    score: {
        type: Number,
        required: true
    }
})

const Option = mongoose.model('Option', optionSchema)

module.exports = Option