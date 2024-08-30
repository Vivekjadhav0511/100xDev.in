const fs = require("fs");

const contents = fs.readFile("a.txt", "utf-8"); // Asynchronusly
console.log(contents);


const contentsOfb = fs.readFileSync("b.txt","utf-8")  // Synchronusly
console.log(contentsOfb);

