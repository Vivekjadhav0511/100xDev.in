
const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.json("Hello HTTPS")
})

app.listen(3000 , ()=>{
    console.log("App Listning On 3000 port");
    
})

