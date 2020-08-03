const db = require('../data/config')

async function getAllProjects() {
  return await db('projects')
}

module.exports = {
  getAllProjects,

}