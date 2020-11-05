exports.up = function (knex) {
  return knex.schema.createTable('cart', (table) => {
    table.string('session_id')
    table.string('prid')
    table.string('id')
    table.string('name')
    table.string('size')
    table.string('lifespan')
    table.string('wick')
    table.integer('price')
    table.integer('quantity')
    table.string('img')
    table.string('details')
    table.string('gift_boxed')
    table.string('scent')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('cart')
}