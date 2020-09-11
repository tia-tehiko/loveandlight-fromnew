const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
    db.getCandles()
    .then(candles => {
        res.json(candles)
    })
})

module.exports = router