console.log('Started Node.js');

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;
for (let index = 0; index < nums.length; index++) {
  total = total + nums[index];
}
console.log(total);
