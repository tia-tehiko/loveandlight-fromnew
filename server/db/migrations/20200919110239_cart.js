
exports.up = function(knex) {
  return knex.schema.createTable('cart', (table) => {
      table.increments('id')
      table.string('name')
      table.string('scent')
      table.string('img')
      table.integer('price')
  })
};

exports.down = function(knex) {
  
};
