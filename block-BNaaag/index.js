// var path = require('path');
// var os = require('os');
// var filePath = path.join(__dirname, 'index.md');
// var freem = os.freemem();
// var cpus = os.cpus().length;
// console.log(filePath, freem, cpus);

var { readFile, readFileSync } = require('fs');
readFile('./file.md', (err, content) => {
  console.log(content.toString());
});

var result = readFileSync(`./file.md`, `utf8`);

console.log(result);

// Buffer

var buff1 = Buffer.alloc(10);
buff1.write('Welcome to Buffer');
console.log(buff1.toString());
