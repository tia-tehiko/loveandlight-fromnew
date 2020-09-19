
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cart').del()
    .then(function () {
      // Inserts seed entries
      return knex('cart').insert([
        { id: 1, name: '', scent: '', img: '', price: 0 }
      ]);
    });
};
