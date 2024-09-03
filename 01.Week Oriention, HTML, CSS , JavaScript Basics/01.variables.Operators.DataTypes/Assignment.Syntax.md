
Q1.Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log

```javaScript 
var Color = "Red"

let Height = 5.2

isLikePizza = True 
```



Q2. Write a function sum that finds the sum of two Numbers. 

```javascript 
function sum(a,b){
    return a + b;
}
let ans = sum(20,30)
console.log(ans);
```

Q3. Write a function called canVote that returns true or false if the age of a user is > 18

```javascript 
function canVote(age){
  if(age>=18){
    return ` true User Can Vote`
  }else{
    return `false User Can't Vote `
  }
}

let user = canVote(144)
console.log(user)
```
Q4. Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd.

```javascript

function checkNumberIsEvenOrOdd(Number){
    if(Number%2==0){
      return `${Number} Is Even Number `
    }else if(Number%2==1){
        return `${Number} is Odd Number `
    }
}
  let result = checkNumberIsEvenOrOdd(20)
  console.log(result)
  
 ```

 Q5. Write a function called sum that finds the sum from 1 to a number

 ```javascript

function sumOfNumber(num) {
    let sumOfNumber = 0
    for (let index = 1; index <= num; index++) {
        sumOfNumber += index
    }
    return sumOfNumber
}

let total = sumOfNumber(100)
console.log(total)
 
 ```