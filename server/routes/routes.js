const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/candles', (req, res) => {
  db.getCandles().then((candles) => {
    res.json(candles)
  })
})

router.get('/diffusers', (req, res) => {
  db.getDiffusers().then((diffusers) => {
    res.json(diffusers)
  })
})

router.get('/scents', (req, res) => {
  db.getScents().then((scents) => {
    res.json(scents)
  })
})

router.post('/cart', (req, res) => {
  db.addToCart(req.body).then(() => {
    res.status(201).send(req.body)
  })
})

module.exports = router
