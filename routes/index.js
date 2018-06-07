module.exports = (app) => {
    require('./questions')(app)
    require('./users')(app)
    require('./options')(app)
}