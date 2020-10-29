const database = require('./connection')

function newCartItem(cartObject, db = database) {
  return db('cart')
    .insert(cartObject)
    .then(() => db('cart').where('id', cartObject.id).first())
}

module.exports = {
  newCartItem
}
