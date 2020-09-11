const path = require('path')
const express = require('express')

const server = express()
const candles = require('./routes/candles')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/candles', candles)

module.exports = server



