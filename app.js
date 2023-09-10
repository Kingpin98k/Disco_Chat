const express = require('express')
const path = require('path')
const app = express()
const globalErrroHandler = require('./controllers/errorController')

app.use(express.static(path.join(__dirname,'public')))
//Now Implementing A Global Error Handling Middleware:
app.use(globalErrroHandler)
app.use(express.json())

const orgRoute = require('./routes/orgRoutes')

app.use('/api/v1/org',orgRoute)

module.exports = app