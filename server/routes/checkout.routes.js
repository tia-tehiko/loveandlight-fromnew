const express = require('express')
const { findAllCartItems, deleteCartItems } = require('../db/cart.db')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

require('dotenv').config({
  path: './.env'
})

const router = express.Router()

router.get('/success', async (req, res) => {
  const CHECKOUT_SESSION_ID = req.query.session_id
  await deleteCartItems(req.session.id)
  res.redirect(`/#/success?session_id=${CHECKOUT_SESSION_ID}`)
})

router.get('/', async (req, res) => {
  const {
    session_id
  } = req.query
  const session = await stripe.checkout.sessions.retrieve(session_id)
  res.send(session)
})

router.post('/', async (req, res) => {
  const domainURL = process.env.DOMAIN

  const cartItems = await findAllCartItems(req.session.id)

  if (cartItems.length) {
    const session = await stripe.checkout.sessions.create({
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['AU', 'NZ'],
      },
      payment_method_types: process.env.PAYMENT_METHODS.split(','),
      mode: 'payment',
      line_items: cartItems.map((item) => ({
        price: item.prid,
        quantity: item.quantity,
        description: item.scent
      })),
      success_url: `${domainURL}/api/v1/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domainURL}/#/cancelled`,
    })

    res.send({
      id: session.id,
    })
  } else {
    res.sendStatus(400)
  }
})

module.exports = router
