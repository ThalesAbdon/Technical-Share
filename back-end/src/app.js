const express = require('express')
const morgan = require('morgan')
const app = express()
const router = require('./routes/routes.js')
const mongoose = require('./database/database')
app.use(morgan('dev'))
app.use(router)
module.exports = app
