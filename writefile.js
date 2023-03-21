const fs = require("fs");

const writefile = process.argv[2];
const myfile = process.argv[3];

console.log(process.argv[2]);

fs.writeFile(writefile, myfile, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was created successfully!");
});
