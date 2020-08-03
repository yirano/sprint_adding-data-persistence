const express = require("express")

const server = express()
const PORT = process.env.PORT || 4000

server.use(express.json())

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({ errorMessage: 'Something happened' })
})

server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})