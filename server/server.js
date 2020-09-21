const path = require('path')
const express = require('express')

const server = express()

const routes = require('./routes/routes')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1', routes)


module.exports = server
