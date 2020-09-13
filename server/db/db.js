const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getCandles(db = connection) {
  return db('candles').select()
}

function getDiffusers(db = connection) {
  return db('diffusers').select()
}

function getScents(db = connection) {
  return db('scents').select()
}

module.exports = {
  getCandles,
  getDiffusers,
  getScents,
}
