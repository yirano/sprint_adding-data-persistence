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

module.exports = router