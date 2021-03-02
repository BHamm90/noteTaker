const expressRoute = require('express').Router()
const path = require('path')

expressRoute.get('/notes',(req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

module.exports = expressRoute