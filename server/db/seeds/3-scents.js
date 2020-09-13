exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('scents')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('scents').insert([
        { id: 1, name: 'Coconut Lime' },
        { id: 2, name: 'French Vanilla' },
        { id: 3, name: 'Japanese Honeysuckle' },
        { id: 4, name: 'Passionfruit & Paw Paw' },
        { id: 5, name: 'Raspberry Vanilla' },
        { id: 6, name: 'Sex On The Beach' },
        { id: 7, name: 'Strawberries & Cream' },
        { id: 8, name: 'Watermelon Lemonade' },
      ])
    })
}
