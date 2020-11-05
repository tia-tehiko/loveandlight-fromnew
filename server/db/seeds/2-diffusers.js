const guid = require('../../utils/guid.util')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('diffusers')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('diffusers').insert([
        {
          id: guid({ prefix: 'DFS' }),
          prid: 'price_1HjyjeANwjB3rM4aDNyE1gLZ',
          name: 'Reed Diffuser',
          size: '150ml - Comes with 10x Fibre Reed Sticks',
          price: 25,
          lifespan: 'Lasts up to 4-8 Months',
          img: './images/4.jpg',
          details:
            'Our glass reed diffuser is perfect for fragrancing any room. They are very popular due to its low maintenance and flame/smoke free. Weather it be your bathroom, living area or near your front door for a lovely welcome.',
        },
        {
          id: guid({ prefix: 'DFS' }),
          prid: 'price_1Hjyk1ANwjB3rM4aL7quoaTa',
          name: 'Round Car Diffuser',
          size: '10ml',
          price: 10,
          lifespan: 'Lasts up to 3 Months',
          img: './images/3.jpg',
          details:
            'Why not have your car smell just as amazing with your favourite fragrance',
        },
        {
          id: guid({ prefix: 'DFS' }),
          prid: 'price_1HjykQANwjB3rM4amZE6vDp6',
          name: 'Circle Car Diffuser',
          size: '10ml',
          price: 10,
          lifespan: 'Lasts up to 3 Months',
          img: './images/6.jpg',
          details:
            'Why not have your car smell just as amazing with your favourite fragrance',
        },
      ])
    })
}
