const database = require('./connection')

function newCartItem(cartObject, db = database) {
  return db('cart')
    .insert(cartObject)
    .then(() => db('cart').where({
      id: cartObject.id,
      session_id: cartObject.session_id,
      scent: cartObject.scent
    }).first())
}

function findAllCartItems(sessionId, db = database) {
  return db('cart').where('session_id', sessionId)
}

function removeCartItem(cartObject, db = database) {
  return db('cart')
    .where({
      id: cartObject.id,
      session_id: cartObject.session_id,
      scent: cartObject.scent
    })
    .del()
}

function findOne(cartObject, db = database) {
  return db('cart').where({
    id: cartObject.id,
    session_id: cartObject.session_id,
    scent: cartObject.scent
  }).first()
}

function updateCartItem(cartObject, db = database) {
  return db('cart').where({
    id: cartObject.id,
    session_id: cartObject.session_id,
    scent: cartObject.scent
  })
  .update(cartObject)
}

function deleteCartItems(session_id, db = database) {
  return db('cart').where({ session_id }).del()
}

module.exports = {
  newCartItem,
  findAllCartItems,
  removeCartItem,
  findOne,
  updateCartItem,
  deleteCartItems
}
