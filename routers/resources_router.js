const router = require('express').Router()
const Resources = require('../models/resources_model')

router.get('/', async (req, res, next) => {
  try {
    const resources = await Resources.getAllResources()
    res.json(resources)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  const postResource = {
    name: req.body.name,
    desc: req.body.desc
  }
  try {
    const newResource = await Resources.postResource(postResource)
    res.json(newResource)
  } catch (error) {
    next(error)
  }
})

module.exports = router