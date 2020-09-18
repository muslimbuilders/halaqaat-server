const express = require('express')
require('dotenv').config()

const halqahRoute = require('./routes/halqahRoute')

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded



app.use('/api/v1/halqah', halqahRoute)




module.exports = app;
