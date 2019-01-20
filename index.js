var http = require("http");
var utils = require("./lib/utils");

var server = http.createServer(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  const msg = utils.greetings("World");

  response.write(msg + "\n\n");
  response.write(`Server time: ${new Date(Date.now()).toLocaleString()}`);
  response.end();
});

var port = process.env.PORT || 1337;
server.listen(port);

// console.log('Server running at http://localhost:%d', port)
