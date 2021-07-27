// console.log()

var { readFile, readFileSync, unlink } = require('fs');

var os = require('os');

var frem = os.freemem();+
var cpus = os.cpus().length;
var version = os.version();
var uptime = os.uptime();

console.log(frem, cpus, version, uptime);

// Blocking
var sync = readFileSync('./app.js', 'utf-8');
console.log(sync);

// console.log('First');
// console.time('task1');
// for (let i = 0; i < 10000; i++) {}
// console.timeEnd('task1');
// console.log('Last');

// Non-blocking code

readFile(`./content.md`, 'utf8', (err, content) => {
  console.log(content);
});

// var fs = require('fs');
// console.log('First');
// console.time('Task1');
// setTimeout(() => {
//   console.log('TimeOut Executed');
//   console.timeEnd('Task1');
// });
// console.time('Task2');
// fs.readFile('./content.md', 'utf8', (err, content) => {
//   console.log(content);
//   console.timeEnd('Task2');
// });
// console.log('Last');
