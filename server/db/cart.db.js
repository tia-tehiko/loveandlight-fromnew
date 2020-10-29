const database = require('./connection')

function newCartItem(cartObject, db = database) {
  return db('cart')
    .insert(cartObject)
    .then(() => db('cart').where('id', cartObject.id).where('session_id', cartObject.session_id).first())
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

function findOne(dataObject, db = database) {
  return db('cart').where('id', dataObject.id).where('session_id', dataObject.session_id).first()
}

module.exports = {
  newCartItem,
  findAllCartItems,
  removeCartItem,
  findOne
}
