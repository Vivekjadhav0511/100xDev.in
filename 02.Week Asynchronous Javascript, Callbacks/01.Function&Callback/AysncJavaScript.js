// Normal functions in JS

function sum(a, b) {
	return a + b;
}

let ans = sum(2, 3)
console.log(sum);


// Find sum from 1 to a number

function sumFromOneToNumber(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans2 = sumFromOneToNumber(100);
console.log(ans2);


// Synchronous code

function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans1 = sum(100);
console.log(ans1);
const ans3 = sum(10000);
console.log(ans3);


const { log } = require("console");
// I/O heavy operations ( Synchronously (One by one))

const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("aa.txt", "utf-8");
console.log(contents2);

const contents3 = fs.readFileSync("aa.txt", "utf-8");
console.log(contents3);


// Functional arguments

function sum(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function doOperation(a, b, op) {
    return op(a, b)
  }
  
  console.log(doOperation(1, 2, sum))


//   Asynchronous code, callbacks

function run() {
	console.log("I will run after 1s");
}

setTimeout(run, 1000);
console.log("I will run immedietely");

// JS Architecture for async code

function first() {
    console.log("First");
  }
  function second() {
    first();
    console.log("Second");
  }
  second();

// ******* Restart **********

function SumofTwoNumber(a,b){
  return a +  b
}

let result = SumofTwoNumber(10,20)
console.log(result)


function sumOfNumberTillNthNumber(num){
  result = num *  (num + 1)
  return result
}

let sumOfNumberTillNthNumbers= sumOfNumberTillNthNumber(5)

console.log( "sumOfNumberTillNthNumber :-" , sumOfNumberTillNthNumbers)

function sumofNumberss(num){
      let result = 0
      for(let i=1; i<=num; i++){
        result = result + i
      }
      return result
}

let totalAddition = sumofNumberss(5)
console.log("totalAddition:-" , totalAddition )

let content = fs.readFile('a.txt','utf-8',(err,data)=>{
     console.log(err,data)
})  // Asynchronously reads the entire contents of a file.
 
console.log(content)
