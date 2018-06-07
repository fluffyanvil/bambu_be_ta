const mongoose = require('mongoose')
const optionModelName = require('./Option').modelName

const questionSchema = new mongoose.Schema({
    text: {
        type: String,
        unique: true,
        required: true
    },
    options: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: optionModelName
    }
})

const Question = mongoose.model('Question', questionSchema)

module.exports = Question