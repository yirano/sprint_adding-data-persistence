const db = require('../data/config')

async function getAllProjects() {
  return await db('projects')
}

async function addProject(data) {
  return await db('projects')
    .insert(data)
}

module.exports = {
  getAllProjects,
  addProject,

}