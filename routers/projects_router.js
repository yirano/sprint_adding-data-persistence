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

router.post('/', async (req, res, next) => {
  try {
    const addProject = await Projects.addProject(req.body)
    res.json(addProject)
  } catch (error) {
    next(error)
  }
})

module.exports = router