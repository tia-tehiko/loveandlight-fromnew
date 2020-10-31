const express = require('express')
const { newCartItem, findAllCartItems, removeCartItem, findOne, updateCartItem } = require('../db/cart.db')
const { orWhereNotExists } = require('../db/connection')

const router = express.Router()

router.get('/', async (req, res) => {
  const cartItems = await findAllCartItems(req.session.id)
  
  res.json(cartItems || [])
})

router.post('/', async (req, res) => {
  const { item } = req.body
  const session_id = req.session.id
  let cartObject = {...item, session_id}

  try {
    const existingCartItem = await findOne(cartObject)

    if (existingCartItem) {
      cartObject.quantity += existingCartItem.quantity
      await updateCartItem(cartObject)
      res.json(cartObject)
    } else {
      const addedCartItem = await newCartItem(cartObject)
      delete addedCartItem.session_id
      res.json(addedCartItem)
    }

  } catch (err) {
    res.json({
      message: 'Couldn\'t add/upadate cart item'
    })
  }
})

router.delete('/', (req, res) => {
  const { item } = req.body
  const session_id = req.session.id

  removeCartItem({ ...item, session_id })
    .then(() => res.sendStatus(201))
    .catch(() => res.json({
      message: 'Couldn\'t remove item from cart'
    }))
})

module.exports = router
