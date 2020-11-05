const express = require('express')
const request = require('superagent')
const { create } = require('../db/db') 
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

require('dotenv').config({
  path: './.env'
})

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { body } = req
    const { name, description, type } = body

    const product = await stripe.products.create({ name, description })

    const price = await stripe.prices.create({
      unit_amount: Math.round(parseFloat(body.price * 100)),
      currency: 'aud',
      product: product.id
    })

    delete body.type

    if (type === 'candles') {
      delete body.lifespan
    } else {
      delete body.wick
    }

    const createdProduct = await create(type, {
      id: product.id,
      prid: price.id,
      ...body,
    })

    res.json(createdProduct)
  } catch (err) {
    res.status(401).json({
      message: 'Couldn\'t create product'
    })
  }
})

module.exports = router
