const http = require('node:http')
const pc = require('picocolors')
// const { findAvailablePort } = require('./free-port')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo!')
})

server.listen(0, () => {
  console.log(
    pc.green(
      `Servidor escuchando en el puerto http://localhost:${
        server.address().port
      }`
    )
  )
})
