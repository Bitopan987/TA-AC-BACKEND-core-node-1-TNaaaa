var http = require('http');
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    console.log(req.method);
    res.setHeader('Content-type', 'text/html');
    fs.createWriteStream('./about.html').pipe(res);
  }
}

server.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});
