var http = require('http')

var server = http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
  response.write('Hello again you! 👋👋 \n\n')
  response.write(`Server time: ${new Date(Date.now()).toLocaleString()}`)
  response.end();
})

var port = process.env.PORT || 1337
server.listen(port)


// console.log('Server running at http://localhost:%d', port)

