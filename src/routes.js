const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const routes = express.Router()
const upload = multer(uploadConfig)

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')

routes
    .post('/sessions', SessionController.store)
    .get('/spots', SpotController.index)
    .post('/spots', upload.single('thumbnail'), SpotController.store)
    .get('/dashboard', DashboardController.show)

module.exports = routes