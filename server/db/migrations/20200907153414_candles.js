
exports.up = function (knex) {
  return knex.schema.createTable('candles', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('size')
    table.string('wick')
    table.integer('price')
    table.string('img')
    table.string('details')
    table.string('gift_boxed')
    table.boolean('inCart')
    table.integer('count')
    table.integer('total')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('candles')
};

