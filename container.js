const http = require('http')
const port = 8888
http.createServer((req, res) => {
  // say hello world to any route.
  res.write('Hello World !')
  res.end()
}).listen(port, function() {
  console.log(`Server listening on port ${port}`)
})