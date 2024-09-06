
function random(){
  console.log("Hello From random .. !!! ");
  
}
let p = new Promise(random)
console.log("Log before then",p);
p.then((data)=>{
    console.log(data);
});

// *******************


aysnc function callMe(){ 
    let data = await fetch("https://www.google.com")
    return data
}

let callMeData = callMe()
console.log( callMeData ) ;
