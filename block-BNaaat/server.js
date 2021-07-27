var http = require('http');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method, req.url);
  res.end('Welcome');
}
server.listen(5000, () => {
  console.log('Server Listening on port 5000');
});
