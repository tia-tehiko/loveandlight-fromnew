exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('id').primary()
    table.string('name')
    table.string('email')
    table.string('hash')
    table.string('salt')
    table.boolean('admin')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
