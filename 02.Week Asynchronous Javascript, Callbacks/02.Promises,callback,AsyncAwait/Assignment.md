Q1. Create a Circle class\

```js
class Circle {
   constructor(radius, color) {
       this.radius = radius;  
       this.color = color;
   }

   area() {
      const area = this.radius * this.radius * Math.PI;
       return area;
   }
   
   paint() {
			console.log(`Painting with color ${this.color}`);
   }

}
const circle = new Circle(2, "red")
const area = circle.area();
console.log(area)
```
Q2. Create a base shape class

```js
class Shape {
    constructor(color) {
        this.color = color;
    }

    paint() {
			console.log(`Painting with color ${this.color}`);
    }

    area() {
        throw new Error('The area method must be implemented in the subclass');
    }

    getDescription() {
        return `A shape with color ${this.color}`;
    }
}
 ```

 Q3. Rectangle class

 ```js  
 class Rectangle extends Shape {
    constructor(width, height, color) {
        super(color);  // Call the parent class constructor to set the color
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    getDescription() {
        return `A rectangle with width ${this.width}, height ${this.height}, and color ${this.color}`;
    }
}
  ```

  Q4. Create a Promise which read The file and trim the file content From  start and end 

```js 
const fs = require("fs");

let readFilefunction = new Promise((resolve,reject)=>{
   resolve(contents = fs.readFileSync("a.txt", "utf-8"))
})

readFilefunction.then((data)=>{
   console.log(data ,typeof(data))  // string
   let trimData =  (data).trim()
   console.log(trimData);
})

```

```js 

 const { error } = require("console");
const fs = require("fs");

let readFilefunction = new Promise((resolve,reject)=>{
   resolve(contents = fs.readFileSync("a.txt", "utf-8", function(error,data){
      return error
   }))
   reject(error)
})

readFilefunction.then((data)=>{
   console.log(data ,typeof(data))  // string
   let trimData =  (data).trim()
   console.log(trimData);
}).catch((error)=>{
   console.log("error =>" , error);
   
})

```