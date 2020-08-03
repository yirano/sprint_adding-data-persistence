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

async function projTasks(id) {
  return await db('tasks')
    .where('tasks.project_id', id)
    .join('projects', 'projects.id', 'tasks.project_id')
    .select('projects.name as project', 'tasks.desc as task')
}

async function projResources(id) {
  return await db('project_resource')
    .where('project_resource.project_id', id)
    .join('projects', 'projects.id', 'project_resource.project_id')
    .join('resources', 'resources.id', 'project_resource.resource_id')
    .select('projects.name as project', 'resources.name as resource')
}

async function newResource(data, projID) {
  const newID = await db('resources')
    .insert(data)
  return await db('project_resource')
    .insert({ resource_id: newID, project_id: projID })
  // .join('projects', 'projects.id', 'project_resource.project_id')
  // .select('projects.name as addedToProject')
}

module.exports = {
  getAllProjects,
  addProject,
  addTask,
  getAllTasks,
  projResources,
  projTasks,
  newResource
}