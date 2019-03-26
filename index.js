var http = require('http');
var utils = require('./lib/utils');
var fs = require('fs');

var sha = fs.readFileSync('./deploy.sha', 'utf8').trim();

var server = http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  const msg = utils.greetings('UBI');
  response.write(`${msg}\n\n`);
  response.write(`Server time: ${new Date(Date.now()).toLocaleString()}\n\n`);

  if (sha.length) {
    response.write(`Deployed SHA: ${sha}`);
  }

  response.end();
});

var port = process.env.PORT || 1337;
server.listen(port);

// console.log('Server running at http://localhost:%d', port)
