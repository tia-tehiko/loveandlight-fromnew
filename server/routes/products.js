const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/candles', (req, res) => {
    db.getCandles()
    .then(candles => {
        res.json(candles)
    })
})

router.get('/diffusers', (req, res) => {
    db.getDiffusers()
    .then(diffusers => {
        res.json(diffusers)
    })
})

module.exports = router