

// callback hell 

/* 
Q: Write code that
logs hi after 1 second
logs hello 3 seconds after step 1
logs hello there 5 seconds after step 2
 
*/

setTimeout(function () {
   console.log("1 Second Passed");
   setTimeout(function () {
      console.log("2 Second Passed ");
      setTimeout(function () {
         console.log("3 Second Passed");
      }, 5000);
   }, 3000);
}, 1000);

// Alt solution (doesnt really have callback hell)

function step3Done() {
   console.log("hello there");
 }
 
 function step2Done() {
   console.log("hello");
   setTimeout(step3Done, 5000);
 }
 
 function step1Done() {
   console.log("hi");
   setTimeout(step2Done, 3000);
 }
 
 setTimeout(step1Done, 1000);
 
//  Promisified version

function setTimeoutPromisified(ms) {
   return new Promise((resolve) => setTimeout(resolve, ms));
 }
 
 setTimeoutPromisified(1000).then(function () {
   console.log("hi");
   setTimeoutPromisified(3000).then(function () {
     console.log("hello");
     setTimeoutPromisified(5000).then(function () {
       console.log("hello there");
     });
   });
 });
 
//  Async await syntax

/* Write code that
logs hi after 1 second
logs hello 3 seconds after step 1
logs hello there 5 seconds after step 2

*/

function setTimeoutPromisified(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
 }
 
 async function solve() {
    await setTimeoutPromisified(1000);
    console.log("hi");
    await setTimeoutPromisified(3000);
    console.log("hello");
    await setTimeoutPromisified(5000);
    console.log("hi there");
 }
 
 solve();
