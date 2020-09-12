
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('diffusers').del()
    .then(function () {
      // Inserts seed entries
      return knex('diffusers').insert([
        {id: 1,name: 'Reed Diffuser',price: 25,img: './images/4.jpg',details: 'Coming Soon',inCart: false,count: 0,total: 0},
        {id: 2,name: 'Round Car Diffuser',price: 8,img: './images/3.jpg', details: 'Coming Soon',inCart: false,count: 0,total: 0},
        {id: 3,name: 'Circle Car Diffuser',price: 8,img: './images/6.jpg', details: 'Coming Soon',inCart: false,count: 0,total: 0}
      ]);
    });
};