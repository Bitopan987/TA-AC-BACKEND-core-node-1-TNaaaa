var http = require('http');
var server = http.createServer(handleRequest);
var fs = require('fs');

function handleRequest(req, res) {
  console.log(req.method, req.url);
  if (req.method === 'GET' && req.url === '/file') {
    res.setHeader('Content-type', 'text/html');
    fs.readFile('./node.html', (err, content) => {
      if (err) {
        console.log(err);
      }
      res.end(content);
    });
  } else if (req.method === 'GET' && req.url === '/stream') {
    res.setHeader('Content-type', 'text/html');
    fs.createReadStream('./node.html').pipe(res);
  } else {
    res.writeHead(404, { 'Content-type': 'text/html' });
    res.end('<h2>Page Not Found</h2>');
  }
}
server.listen(5555, () => {
  console.log('Server Listening on port 5555');
});
