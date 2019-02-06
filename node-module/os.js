const os = require("os");

var totalmem = os.totalmem();
var freememory = os.freemem();

console.log(`Total Memory: ${totalmem}`);
console.log(`Free Memory: ${freememory}`);
