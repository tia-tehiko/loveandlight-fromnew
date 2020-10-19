const guid = require('../../utils/guid.util')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('scents')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('scents').insert([
        { id: guid({ prefix: 'SCN' }), name: 'Coconut Lime' },
        { id: guid({ prefix: 'SCN' }), name: 'French Vanilla' },
        { id: guid({ prefix: 'SCN' }), name: 'Japanese Honeysuckle' },
        { id: guid({ prefix: 'SCN' }), name: 'Passionfruit & Paw Paw' },
        { id: guid({ prefix: 'SCN' }), name: 'Raspberry Vanilla' },
        { id: guid({ prefix: 'SCN' }), name: 'Sex On The Beach' },
        { id: guid({ prefix: 'SCN' }), name: 'Strawberries & Cream' },
        { id: guid({ prefix: 'SCN' }), name: 'Watermelon Lemonade' },
      ])
    })
}
