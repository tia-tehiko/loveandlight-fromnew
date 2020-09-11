const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getCandles (db = connection) {
    return db('candles').select()
}

module.exports = {
    getCandles
}