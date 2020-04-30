const http = require('http')
const port = 80
const server = http.createServer((request, response) => {
  // say hello world to any route.
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.write('  foo GUY!! ')
  response.end()
})

server.listen(port)
console.log(`Server running at http://localhost: ${port}`)