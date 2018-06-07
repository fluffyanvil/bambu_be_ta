const path = '/questions'
const Question = require('../models/Question')

module.exports = (app) => {
    app.get(path, (req, res) => {
        Question.find({})
        .populate({
            path: 'options',
            model: 'Option'
        })
        .exec()
        .then(questions => res.status(200).json(questions))
        .catch(err => res.status(500).json(err))
    })

    app.post(path, (req, res) => {
        const question = new Question(req.body)
        question.save().then(q => {
            res.status(200).json(q)
        })
        .catch(err => res.status(500).send(err.message))      
    })
}