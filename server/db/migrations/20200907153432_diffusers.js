exports.up = function (knex) {
  return knex.schema.createTable('diffusers', (table) => {
    table.string('id').primary()
    table.string('prid')
    table.string('name')
    table.string('size')
    table.integer('price')
    table.string('lifespan')
    table.string('img')
    table.string('details')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('diffusers')
}
