const db = require('../data/config')

async function getAllResources() {
  return await db('resources')
}

async function postResource(data) {
  return await db('resources')
    .insert(data)
}



module.exports = {
  getAllResources,
  postResource,
}