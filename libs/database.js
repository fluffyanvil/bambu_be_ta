const mongoose = require('mongoose')

module.exports = () => {
    const module = {}
    module.connect = function (url) {
        mongoose.connect(url)

        const db = mongoose.connection

        db.on('error', (err) => {
        })

        db.once('open', () => {
        })

        db.once('close', () => {
        })
    }

    module.disconnect = function () {
        mongoose.disconnect()
    }

    return module
}