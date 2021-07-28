var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer(handleRequest);
function handleRequest(req, res) {
  var parseUrl = url.parse(req.url, true);
  console.log(parseUrl.pathname, req.url);
  res.setHeader('Content-type', 'application/json');
  res.end(JSON.stringify(parseUrl.query));
}
server.listen(3000, () => {
  console.log('Server Listening on port 3000');
});
