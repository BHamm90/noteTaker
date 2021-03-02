const expressRoute = require('express').Router()
const routingHTML = require('./htmlRoutes')
const MiddleWare = require('./noteRoutes/noteMiddleWare')

expressRoute.use('/api', MiddleWare)
expressRoute.use(routingHTML)

module.exports = expressRoute