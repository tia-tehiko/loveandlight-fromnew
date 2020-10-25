const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { findOne } = require('../db/user.db')
const { validPassword } = require('../utils/password.util')

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password' 
}, (email, password, done) => {
  findOne({ email })
    .then((user) => {

      if (!user) return done(null, false)

      const isValid = validPassword(password, user.hash, user.salt)

      return done(null, isValid ? user : false)
    })
    .catch(done)
}))

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser((userId, done) => {
  findOne({id: userId})
    .then((user) => done(null, user))
    .catch(done)
})
