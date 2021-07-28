// var http = require('http');
// var server = http.createServer(handleRequest);
// var fs = require('fs');

// function handleRequest(req, res) {
//   console.log(req.method, req.url);
//   if (req.method === 'GET' && req.url === '/file') {
//     fs.readFile('./node.html', (err, content) => {
//       if (err) {
//         console.log(err);
//       }
//       res.setHeader('Content-type', 'text/html');
//       res.end(content);
//     });
//   } else if (req.method === 'GET' && req.url === '/stream') {
//     res.setHeader('Content-type', 'text/html');
//     fs.createReadStream('./node.html').pipe(res);
//   } else {
//     res.writeHead(404, { 'Content-type': 'text/html' });
//     res.end('<h2>Page Not Found</h2>');
//   }
// }
// server.listen(5555, () => {
//   console.log('Server Listening on port 5555');
// });

//1

// var http = require('http');
// var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//   console.log(req.method, req.url);
//   res.end('Welcome');
// }
// server.listen(5000, () => {
//   console.log('Server Listening on port 5000');
// });

//2

// var http = require('http');
// var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//   res.end('My first server in NodeJS');
// }
// server.listen(5100, () => {
//   console.log('Server Listening on port 5100');
// });

//3

// var http = require('http');
// var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//   console.log(req.headers);
// }
// server.listen(5555, "localhost");

//4

// var http = require('http');
// var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//   console.log(req.method, req.url);
//   res.end(req.method, req.url);
// }
// server.listen(5566, 'localhost');

//5

// var http = require('http');
// var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//   var header = req.headers;
//   res.end(header);
// }
// server.listen(7000, () => {
//   console.log(`server listening on port 7000`);
// });

//6

// var http = require('http');
// var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//   res.statusCode = 202;
//   res.end();
// }
// server.listen(3333, () => {
//   console.log(`server listening on port 3333`);
// });

//7

// var http = require('http');
// var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//   res.setHeader('Content-type', 'text/html');
//   res.end(`<h3>Welcome to altcampus</h3>`);
// }
// server.listen(8000, () => {
//   console.log(`server listening on port 8000`);
// });

//8

// var http = require('http');
// var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//   res.writeHead(201, { 'Content-type': 'text/html' });
//   res.end(`<h3>Welcome to altcampus</h3>`);
// }
// server.listen(8000, () => {
//   console.log(`server listening on port 8000`);
// });

//9

// var http = require('http');
// var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//   res.setHeader('Content-type', 'application/json');
//   res.end(`{success: true, message: 'Welcome to Nodejs'}`);
// }
// server.listen(8888, () => {
//   console.log(`server listening on port 8888`);
// });

//10

// var http = require('http');
// var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//   console.log(req.method);
//   res.setHeader('Content-type', 'text/html');
//   res.end(`<h2>posted for first time</h2>`);
// }
// server.listen(5050, () => {
//   console.log(`server listening on port 5050`);
// });

//11

// var http = require('http');
// var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//   console.log(req.method, req.url);
//   if (req.method === 'GET' && req.url === '/') {
//     res.setHeader('Content-type', 'text/plain');
//     res.end('Bitopan');
//   } else if (req.method === 'GET' && req.url === '/about') {
//     res.setHeader('Content-type', 'text/html');
//     res.end(`<h2>Bitopan</h2>`);
//   } else {
//     res.writeHead(404, { 'Content-type': 'text/html' });
//     res.end('<h2>Page Not Found</h2>');
//   }
// }
// server.listen(2345, () => {
//   console.log('Server Listening on port 2345');
// });

//12

// var http = require('http');
// var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//   console.log(req.method, req.url);
//   if (req.method === 'GET' && req.url === '/users') {
//     res.setHeader('Content-type', 'text/html');
//     res.write(`<input type="text" placeholder="Name" name="username">`);
//     res.write(`<input type="email" placeholder="Email" name="email">`);
//     res.end();
//   } else if (req.method === 'POST' && req.url === '/users') {
//     res.setHeader('Content-type', 'text/plain');
//     res.end(`Posted for the second time'.`);
//   }
// }
// server.listen(3000, () => {
//   console.log('Server Listening on port 3000');
// });
