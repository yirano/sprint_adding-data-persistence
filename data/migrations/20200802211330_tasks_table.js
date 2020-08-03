
exports.up = async function (knex) {
  await knex.schema.createTable('tasks', table => {
    table.increments('id')
    table.text('desc').notNull()
    table.text('notes')
    table.bool('completed').default(false)
    table
      .integer('project_id')
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('tasks')
}
