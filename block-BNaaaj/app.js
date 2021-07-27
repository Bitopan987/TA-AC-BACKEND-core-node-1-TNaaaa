var area = require('./area');

console.log(area.square(5));
console.log(area.rectangle(2, 3));
console.log(area.circle(5));

var buff1 = Buffer.alloc(12);
buff1.write('Welcome to NODE');
console.log(buff1.toString());
