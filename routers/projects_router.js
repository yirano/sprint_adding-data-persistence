const router = require('express').Router()
const Projects = require('../models/projects_model')

router.get('/', async (req, res, next) => {
  try {
    const projects = await Projects.getAllProjects()
    res.json(projects)
  } catch (error) {
    next(error)
  }
})

router.get('/tasks', async (req, res, next) => {
  try {
    const tasks = await Projects.getAllTasks()
    res.json(tasks)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const addProject = await Projects.addProject(req.body)
    res.json(addProject)
  } catch (error) {
    next(error)
  }
})

router.post('/:id/tasks', async (req, res, next) => {
  const newTask = {
    desc: req.body.desc,
    notes: req.body.note,
    project_id: req.params.id
  }
  try {
    const addTask = await Projects.addTask(newTask)
    res.json(addTask)
  } catch (error) {
    next(error)
  }
})

module.exports = router