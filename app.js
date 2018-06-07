const config = require('./config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const database = require('./libs/database')()

app.use(bodyParser.json())
require('./routes')(app)
database.connect(config.mongo)

const server = app.listen(config.port, () => {
    const host = server.address().address
    const port = server.address().port
    console.log('Web server started at http://%s:%s', host, port)
})