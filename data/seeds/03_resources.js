exports.seed = async function (knex) {
  await knex('resources').insert([
    { name: 'The bed', desc: "It's in the master bedroom" },
    { name: 'Your blanket', desc: 'The fluffy blue one' }
  ])
}