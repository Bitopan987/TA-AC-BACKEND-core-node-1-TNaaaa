var http = require('http');
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.url.split('.').pop() === 'css') {
    res.setHeader('Content-Type', 'text/css');
    fs.readFile('./assets/stylesheets/' + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }
  if (req.url.split('.').pop() === '.jpg') {
    res.setHeader('Content-Type', 'image/jpg');
    fs.readFile('./assets/stylesheets/' + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }
  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('Content-Type', 'image.jpg');
    fs.readFile('./index.html', (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }
}

server.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});
