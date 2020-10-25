const express = require('express')
const passport = require('passport')
const { newUser } = require('../db/user.db')
const guid = require('../utils/guid.util')
const { genPassword } = require('../utils/password.util')
const { isAuth } = require('./middleware/auth.middleware')
const router = express.Router()

router.get('/', isAuth, (req, res) => {
  res.status(200).json({
    id: req.user.id,
    email: req.user.email,
    admin: Boolean(req.user.admin)
  })
})

router.post('/login', passport.authenticate('local'))

router.post('/register', async (req, res) => {
  const saltHash = genPassword(req.body.password)
    
  const salt = saltHash.salt
  const hash = saltHash.hash

  const user = await newUser({
    id: guid({ prefix: 'USR'}),
    email: req.body.email,
    hash: hash,
    salt: salt,
    admin: false
  })

  res.json(user)
})

module.exports = router
