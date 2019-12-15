const express = require('express')
const server = express()
const middleware = require('./middleware/')
const routes = require('./routes/')

server.use(express.json())
middleware(server)
routes(server)

server.get("/", (req, res) => {
  res.send("<h1>I am your server and I have life!</h1>")
})

server.use((req, res) => {
  res.status(404).json({ message: "You have fallen off the path and should try your journey again."})
})

server.use(( err, req, res, next ) => {
  res.status(500).json({ message: "Well, this is awkward. It is not you, it is me."})
})

module.exports = server