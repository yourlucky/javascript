var fs = require("fs");

fs.readFile("sample.txt", function (err, data) {
  if (err) throw err;
  console.log(data.toString());
});