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

function addToCart(item, scent, db = connection) {
  const { name, img, price } = item
  return db('cart').insert({
    name: name,
    img: img,
    price: price,
    scent: scent,
  })
}

module.exports = {
  getCandles,
  getDiffusers,
  getScents,
  addToCart,
}
