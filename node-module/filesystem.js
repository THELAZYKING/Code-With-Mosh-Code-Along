const fs = require("fs");

const file = fs.readdirSync("./");
console.log(file);

const files = fs.readdir("./", function(err, files) {
  if (err) console.log("Error", err);
  else console.log("Result", files);
});
