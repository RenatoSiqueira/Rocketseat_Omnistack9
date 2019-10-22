require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const routes = require('./routes')

const port = process.env.PORT || 3000
const MONGOSERVER = process.env.MONGOSERVER || 'mongodb://localhost:27017/omnistack9'

mongoose
    .connect(MONGOSERVER, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((err) => {
        app.use(express.json())
        app.use(routes)

        app.listen(port, () => console.log('Server Running'))
    })