const database = require('./connection')

function findOne(dataObject, db = database) {
  if (typeof dataObject !== 'object') return
  const [field, value] = Object.entries(dataObject)
  return db('users').where(field, value).first()
}

module.exports = {
  findOne
}
