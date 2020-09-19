
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('diffusers').del()
    .then(function () {
      // Inserts seed entries
      return knex('diffusers').insert([
        { id: 1, name: 'Reed Diffuser', size: '150ml - Comes with 10x Fibre Reed Sticks', price: 25, lifespan: 'Lasts up to 4-8 Months', img: './images/4.jpg', details: 'Our glass reed diffuser is perfect for fragrancing any room. They are very popular due to its low maintenance and flame/smoke free. Weather it be your bathroom, living area or near your front door for a lovely welcome.', inCart: false, count: 0, total: 0 },
        { id: 2, name: 'Round Car Diffuser', size: '10ml', price: 10, lifespan: 'Lasts up to 3 Months', img: './images/3.jpg', details: 'Why not have your car smell just as amazing with your favourite fragrance', inCart: false, count: 0, total: 0 },
        { id: 3, name: 'Circle Car Diffuser', size: '10ml', price: 10, lifespan: 'Lasts up to 3 Months', img: './images/6.jpg', details: 'Why not have your car smell just as amazing with your favourite fragrance', inCart: false, count: 0, total: 0 }
      ]);
    });
};