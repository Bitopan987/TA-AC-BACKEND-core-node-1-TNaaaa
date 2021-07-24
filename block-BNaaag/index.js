// var path = require('path');
// var os = require('os');
// var filePath = path.join(__dirname, 'index.md');
// var freem = os.freemem();
// var cpus = os.cpus().length;
// console.log(filePath, freem, cpus);

var fs = require('fs');
fs.readFile('./file.md', (err, content) => {
  console.log(err, content.toString());
});

var sync = require('./sync');
console.log(sync.sum(7, 8));

// Buffer

var buff1 = Buffer.alloc(10);
buff1.write('Welcome to Buffer');
console.log(buff1.toString());
