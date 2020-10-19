exports.up = function (knex) {
  return knex.schema.createTable('scents', (table) => {
    table.string('id').primary()
    table.string('name')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('scents')
}
