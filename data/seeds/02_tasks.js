exports.seed = async function (knex) {
  await knex('tasks').insert([
    { desc: 'Dry bedsheets', notes: "it's in the dryer, yo.", completed: false, project_id: 1 }
  ])
}