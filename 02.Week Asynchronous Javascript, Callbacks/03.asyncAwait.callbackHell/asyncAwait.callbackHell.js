
console.log("hello");

const fs = require("fs");

let readFilefunction = new Promise((resolve,reject)=>{
   resolve(contents = fs.readFileSync("a.txt", "utf-8"))
})

readFilefunction.then((data)=>{
   console.log(data ,typeof(data))  // string
   let trimData =  (data).trim()
   console.log(trimData);
})