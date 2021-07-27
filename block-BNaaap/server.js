var http = require('http');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method);
  //   res.statusCode = 201;
  //   res.setHeader(`Content-type`, `text/plain`);
  res.writeHead(201, { 'Content-type': 'text/plain' });
  //   res.write('Hello');
  //   res.write('World');
  res.end('Hello');
  //   res.end();
  //   res.end(`<h1> Welcome</h1>`);
}

server.listen(4444, () => {
  console.log('Server Listening on port 4444');
});
