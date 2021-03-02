const expressRoute = require('express').Router()
const routingNotes = require('./notePageRoute')

expressRoute.use('/notes', routingNotes)

module.exports = expressRoute