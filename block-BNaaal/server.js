var http = require('http');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.end('Welcome to the Server');
}

server.listen(4000, () => {
  console.log('server Started');
});
