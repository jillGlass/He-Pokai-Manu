exports.up = function (knex) {
  return knex.schema.createTable('birds', (table) => {
    table.increments('bird_id')
    table.string('name')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('birds')
}
