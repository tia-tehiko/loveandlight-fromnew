const path = require('path')
const express = require('express')
const session = require('express-session')
const KnexStore = require('connect-session-knex')(session)

const server = express()

require('dotenv').config()

const routes = require('./routes/routes')
const auth = require('./routes/auth.routes')

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.static(path.join(__dirname, './public')))

const connection = require('./db/connection')
const passport = require('passport')
const sessionStore = new KnexStore({
  knex: connection,
  tablename: 'sessions'
})

server.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
}))

require('./config/passport')

server.use(passport.initialize())
server.use(passport.session())

server.use('/api/v1/auth', auth)
server.use('/api/v1', routes)

module.exports = server
