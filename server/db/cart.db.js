const database = require('./connection')

function newCartItem(cartObject, db = database) {
  return db('cart')
    .insert(cartObject)
    .then(() => db('cart').where('id', cartObject.id).first())
}

function findAllCartItems(sessionId, db = database) {
  return db('cart').where('session_id', sessionId)
}

function removeCartItem(cartObject, db = database) {
  return db('cart')
    .where('id', cartObject.id)
    .where('session_id', cartObject.session_id)
    .del()
}

module.exports = {
  newCartItem,
  findAllCartItems,
  removeCartItem
}
