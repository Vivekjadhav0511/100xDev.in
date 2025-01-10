const fs = require('fs')

function callbackFunction(err,data){
  if(err){
    console.log("Erorr Is :-" ,err)
  }else{
    console.log("Data is :-" , data)
  }
}

const contentReading = fs.readFileSync('a.txt','utf8', callbackFunction)

// console.log(contentReading)

console.log("Done ! First Before The Readfile")


/* 
Readfile Asysncronously Form File A.txt
Done ! First Before The Readfile    
=> cause File Is Reading syncronusly code excute Line By Line

*/


  
  const contentReading2 = fs.readFile('a.txt','utf8', callbackFunction)
  
  console.log(contentReading2)
  
  console.log("Done ! First Before The Readfile")

  /* 
  Done ! First Before The Readfile
  Data is :- Readfile Asysncronously Form File A.txt
  => cause The file Is Reading Asyncronusly The for Reading file the operation will take time so insted of waiting
  for complition of operation it moves to next line  
  thread will not stuck overtheir
  
  */


  const map = new Map()
  map.set('userName', "vivek@gmail.com")
  map.set('userName', "vivek@gmail.com")
  map.set('pass', "pass@123")
  map.set('pass', "pass@123")
  map.set('DOB', "01-01-2001")
  console.log(map)

  // Doesn't Take A Duplicate value 

  console.log(map.get('userName'))  // vivek@gmail.com => Accessing Value Through Key

let fetchData =  new Promise((res,rej)=>{
  let x = 1
    if(x==1){
      res(fetch('https://api.github.com/users/vivekjadhav0511'))
    }else{
      rej("Something Is Went Wrong")
    }
  })


fetchData.then((data)=>{
  let result = data.json()
  .then((responsedata)=>{
    console.log(responsedata)
  })
}).catch((error)=>{
  console.log(error)
})


let CurrentDate = new Date()
console.log(CurrentDate);
console.log(CurrentDate)

