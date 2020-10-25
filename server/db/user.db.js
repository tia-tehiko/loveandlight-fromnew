const database = require('./connection')

function findOne(dataObject, db = database) {
  if (typeof dataObject !== 'object') return
  const [field, value] = Object.entries(dataObject)[0]
  return db('users').where(field, value).first()
}

function newUser(userObject, db = database) {
  return db('users')
    .insert(userObject)
    .then(() => db('users').where('id', userObject.id).first())
}

module.exports = {
  findOne,
  newUser
}
