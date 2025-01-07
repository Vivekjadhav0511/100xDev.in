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