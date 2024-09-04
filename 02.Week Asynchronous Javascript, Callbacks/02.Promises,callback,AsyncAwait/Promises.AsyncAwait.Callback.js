// class In Javascript -> In JavaScript, classes are a way to define blueprints for creating objects (these objects are different from the objects defined in the last section).
/*  This Represent The current Contex..  */
// To structure Key value pair in together 

let reactangle = {
    width: 2,
    hei: 4,
    color: "yellow"
}

function areaOfRectangle(react) {
    return (react.width * react.hei)
}

let Result = areaOfRectangle(reactangle)
// console.log("Area Of Reactagle is :- " + Result);  //  ${} -> template literals. 



class Rectangle {
    constructor(width, hei, color) {
        this.width = width;
        this.hei = hei;
        this.color = color;
    }

    area() {
        const area = this.width * this.hei;
        return area;
    }

    paint() {
        console.log(`Painting with color ${this.color}`);
    }

}

const rect = new Rectangle(2, 4, "Yellow")  // New Instance Of Reactangle Class, whenever we Declare a class
//   with New Keyword constructor Get Callled ...
console.log(rect, typeof (rect));
const area = rect.area();
console.log(area)

/* Inheritance In class   */

class username {
    constructor(name) {
        this.name = name
    }
}

class colorGame extends username {
    constructor(color, score, name) {
        super(name),
            this.color = color,
            this.score = score
    }


    finalColorScore() {
        return (` color is ${this.color} & The Final Score Is ${this.score} & Username is ${this.name}`)
    }
}

let userOne = new colorGame(1000, "Red", "vivek Jadhav ")
console.log(userOne.finalColorScore());

// Some Classes  In Javascript 

const date = new Date()
console.log(date.toLocaleTimeString());

// Map In Javascript 

const map = new Map()
map.set("age", 18)
map.set("username", "vivek jadhav")

console.log(map.get("age"));

/*  Promises  */

/*  A Promise in JavaScript is an object that represents the eventual completion 
(or failure) of an asynchronous operation and its resulting value.
 Promises are used to handle asynchronous operations more effectively than
  traditional callback functions, providing a cleaner and more manageable 
  way to deal with code that executes asynchronously, such as API calls, 
  file I/O, or timers.

  Returing a Object Of Promise Class 
  */

function setTimeoutPromisified(ms) {
    return new Promise((res, rej) => {
            setTimeout(res,ms)
        })
}

function callback() {
    console.log("3 seconds have passed");
}

setTimeoutPromisified(3000).then(callback)

// *****************************************************

let completeTask = new Promise((resolve, rejected)=>{
       if(1 != 1){
         resolve("Task Completed .. !!!")
       }else{
        rejected("task Get Rejected.. !!")
       }
    })

completeTask.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("error");
    
})

console.log("Hello after Promises");  // Hello after Promises , Task Completed .. !!!

// ***************

function callbackPromise(resolve){
    console.log("callbackPromise");
    setTimeout(resolve,3000)
} // resolve call after 3second 

callbackPromise(function sayHelloToPromise(){
      console.log("sayHellofrom Promise !!! ");
})



function random(){
  console.log("Hello From random .. !!! ");
  
}
let p = new Promise(random)
console.log("Log before then",p);
p.then((data)=>{
    console.log(data);
});



