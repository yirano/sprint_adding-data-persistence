
exports.up = async function (knex) {
  await knex.schema.createTable('projects', table => {
    table.increments('id')
    table.text('name').notNull()
    table.text('desc')
    table.bool('completed').default(false)
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('projects')
}
