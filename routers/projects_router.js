const router = require('express').Router()
const db = require('../data/config')

router.get('/', async (req, res, next) => {
  try {

  } catch (error) {
    next(error)
  }
})

module.exports = router