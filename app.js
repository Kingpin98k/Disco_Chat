const express = require('express')
const path = require('path')
const app = express()
const globalErrroHandler = require('./controllers/errorController')

app.use(express.static(path.join(__dirname,'public')))
//Now Implementing A Global Error Handling Middleware:
app.use(globalErrroHandler)
app.use(express.json())

const orgRoute = require('./routes/orgRoutes')
const roomRoute = require('./routes/roomRoute')

app.use('/api/v1/org',orgRoute)
app.use('/api/v1/room',roomRoute)

module.exports = app