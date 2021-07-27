var url = require('url');
var parseUrl = url.parse(
  `https://airindia.com/fares/calculate?from=delhi&to=detroit`,
  true
);
console.log(parseUrl);

console.log(parseUrl.pathname, parseUrl.protocol);
