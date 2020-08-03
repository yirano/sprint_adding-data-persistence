const db = require('../data/config')

async function getAllProjects() {
  return await db('projects')
}

async function addProject(data) {
  return await db('projects')
    .insert(data)
}

async function getAllTasks() {
  return await db('tasks')
    .join('projects', 'projects.id', 'tasks.project_id')
    .select('projects.name as projName', 'projects.desc as projDetail', 'tasks.desc as taskDetail')
}

async function addTask(data) {
  return await db('tasks')
    .insert(data)
}

module.exports = {
  getAllProjects,
  addProject,
  addTask,
  getAllTasks
}