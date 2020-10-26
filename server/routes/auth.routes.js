const express = require('express')
const passport = require('passport')
const { newUser, findOne } = require('../db/user.db')
const guid = require('../utils/guid.util')
const { genPassword } = require('../utils/password.util')
const { isAuth } = require('./middleware/auth.middleware')
const router = express.Router()

router.post('/login', passport.authenticate('local', { failureRedirect: 'login/failure', successRedirect: 'login/success' }))

router.post('/register', async (req, res) => {
  const user = await findOne({ email: req.body.email })

  if (!user) {
    const saltHash = genPassword(req.body.password)

    const salt = saltHash.salt
    const hash = saltHash.hash

    const user = await newUser({
      id: guid({ prefix: 'USR'}),
      name: req.body.name,
      email: req.body.email,
      hash: hash,
      salt: salt,
      admin: false
    })

    res.json({
      success: true,
      message: "user has successfully been registered",
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      },
      cookies: req.cookies
    })
  } else {
    res.status(401).json({
      success: false,
      message: "user with this email already exists"
    })
  }
})

router.get('/login/success', isAuth, (req, res) => res.json({
  success: true,
  message: "user has successfully authenticated",
  user: {
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  },
  cookies: req.cookies
}))

router.get('/login/failure', (req, res) => res.status(401).json({
  success: false,
  message: "user failed to authenticate."
}))

module.exports = router
