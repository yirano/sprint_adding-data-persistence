exports.seed = async function (knex) {
  await knex('projects').insert([
    { name: 'Sleep', desc: '', completed: false }
  ])
}