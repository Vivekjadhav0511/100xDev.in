Q1. Write a function that takes a user as an input and greets them with their name and age

```javascript

let user = {
    name: "Vivek",
	age: 19
}

function greating(user){
    console.log(`Hello Good Morning ! ${user.name} and Your age is ${user.age}`);
    
}

greating(user)
 ```

Q2. Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
Assignment & Also tell the user if they are legal to vote or not

```javascript 
let username={
    name:"vivek jadhav",
    age:19,
    gender:"Male"
}

function greating(user){
    if (user.age >= 18) {
        console.log(`Hii Good Morning ! Mr/Mrs ${user.name} and Your age is ${user.age} & Gender is ${user.gender} & " ✅ You Can Vote " `);  
    }else{
        console.log(`Hii Good Morning ! Mr/Mrs ${user.name} and Your age is ${user.age} & Gender is ${user.gender} & " ❌ You Can't Vote " `)
    } 
}
greating(username)
```
Q3. Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

```js 
/* Filter Method :-  */

let arrayOfNumber = [1,2,3,4,5,6,8,0,40,50,10,60,44,15,92,100]

let filterdArray = arrayOfNumber.filter((value,index)=>{
    return value%2==0
})

console.log(filterdArray);

/*  Without Filter Method :- */

function filterArray(array){
    let evenNumber = []
    for (let i = 0; i < array.length; i++) {
       if (array[i]%2===0) {
             evenNumber.push(array[i])
       }
    }
   return evenNumber
}

let FinalArray = filterArray(arrayOfNumber)
console.log(FinalArray);
```

Q4. Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

```js

const users = [{
    name: "vivek jadhav",
    age: 21
},
{
    name: "Golu",
    age: 22
},
{
    name:"ram",
    age:14
}]

/*  const user1 = users[0].age
     console.log(user1); */

function filterArray(array){
    let filteredArray = array.filter((value,index)=>{
        console.log(value);  
        return value.age >= 18
    })
    return filteredArray  
}

let userMoreThan18 = filterArray(users)
console.log(userMoreThan18);

Output :- ` 

{ name: 'vivek jadhav', age: 21 }
{ name: 'Golu', age: 22 }
{ name: 'ram', age: 14 }

[{ name: 'vivek jadhav', age: 21 },
 { name: 'Golu', age: 22 } ] `

```
Q5. Create a function that takes an array of objects as input,
and returns the users whose age > 18 and are male

```js 

const users = [{
    name: "Vivekkk",
    age: 21,
    gender:"Male"
},
{
    name: "Rahul",
    age: 22,
    gender:"Male"
},
{
    name:"Abhishek",
    age:14,
    gender:"Male"
},
{
    name:"rashmika",
    age:22,
    gender:"Female"
},
{
    name:"Krutika",
    age:18,
    gender:"Female"
},
{
    name:"prajakta",
    age:14,
    gender:"Male"
},
]

function filterArray(array){
    let filteredArray = array.filter((value,index)=>{
        console.log(value);  
        return (value.age >= 18 && value.gender=="Male")
    })
    return filteredArray  
}

let userMoreThan18 = filterArray(users)
console.log(userMoreThan18);

Output :- `

{ name: 'Vivekkk', age: 21, gender: 'Male' }
{ name: 'Rahul', age: 22, gender: 'Male' }
{ name: 'Abhishek', age: 14, gender: 'Male' }
{ name: 'rashmika', age: 22, gender: 'Female' }
{ name: 'Krutika', age: 18, gender: 'Female' }
{ name: 'prajakta', age: 14, gender: 'Male' }

[
  { name: 'Vivekkk', age: 21, gender: 'Male' },
  { name: 'Rahul', age: 22, gender: 'Male' }
]`

```
 