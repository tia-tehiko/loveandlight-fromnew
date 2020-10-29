const express = require('express')
const { newCartItem, findAllCartItems, removeCartItem } = require('../db/cart.db')

const router = express.Router()

router.get('/', async (req, res) => {
  const cartItems = await findAllCartItems(req.session.id)
  
  res.json(cartItems || [])
})

router.post('/', (req, res) => {
  const { item } = req.body
  const session_id = req.session.id

  newCartItem({...item, session_id})
    .then((addedCartItem) => {
      delete addedCartItem.session_id
      res.json(addedCartItem)
    })
    .catch(() => res.json({
      message: 'Couldn\'t add item to cart'
    }))
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
