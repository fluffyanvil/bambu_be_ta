const path = '/options'
const Option = require('../models/Option')

module.exports = (app) => {
    app.get(path, (req, res) => {
        Option.find()
            .then(options => res.status(200).json(options))
            .catch(err => res.status(500).json(err))
    })

    app.post(path, (req, res) => {
        new Option(req.body).save()
            .then(option => res.status(200).json(option))
            .catch(err => res.status(500).send(err.message))
    })
}