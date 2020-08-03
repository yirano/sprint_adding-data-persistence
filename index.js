const express = require("express")
const projects = require('./routers/projects_router')
const resources = require('./routers/resources_router')
const server = express()
const PORT = process.env.PORT || 4000

server.use(express.json())

server.use('/api/projects', projects)
server.use('/api/resources', resources)

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({ errorMessage: 'Something happened' })
})

server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})