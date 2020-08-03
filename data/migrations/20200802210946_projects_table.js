
exports.up = async function (knex) {
  await knex.schema.createTable('projects', table => {
    table.increments('id')
  })
}

exports.down = async function (knex) {

}
