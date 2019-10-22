require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const routes = require('./routes')

const port = process.env.PORT || 3000
const MONGOSERVER = process.env.MONGOSERVER || 'mongodb://localhost:27017/omnistack9'

app.use(cors)
app.use(express.json())
app.use(routes)

mongoose
    .connect(MONGOSERVER, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((err) => {
        app.listen(port, () => console.log('Server Running'))
    })