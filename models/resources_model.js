const db = require('../data/config')

async function getAllResources() {
  return await db('resources')
}

async function postResource(data) {
  return await db('resources')
    .insert(data)
}

async function resourceProj(id) {
  return await db('project_resource')
    .where('project_resource.resource_id', id)
    .join('projects', 'projects.id', 'project_resource.project_id')
    .join('resources', 'resources.id', 'project_resource.resource_id')
    .select('projects.name as project')
}

module.exports = {
  getAllResources,
  postResource,
  resourceProj
}