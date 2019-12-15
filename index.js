require('dotenv').config()

const server = require('./api/server')

port = process.env.PORT || 5000

server.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})