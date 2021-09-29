const express = require('express')
const cors = require('cors')
require('./db/mongoose')
const userRouter = require('./routers/user')
const sessionRouter = require('./routers/session')
const teamRouter = require('./routers/team')
const sdkRouter = require('./routers/sdk')

const app = express()


app.use(cors())
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Methods', '*')
    res.header('Access-Control-Allow-Credentials', true)
    next()
})
app.use(express.json())
app.use(userRouter)
app.use(sessionRouter)
app.use(teamRouter)
app.use(sdkRouter)

module.exports = app
