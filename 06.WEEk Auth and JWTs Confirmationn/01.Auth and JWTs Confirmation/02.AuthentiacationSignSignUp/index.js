const express = require("express")
import jwt from 'jsonwebtoken'
const app = express()
const JWT_SECRET = "USER_APP";

const users = []

// function generateToken() {
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token = "";
//     for (let i = 0; i < 32; i++) {
//         // use a simple function here
//         token += options[Math.floor(Math.random() * options.length)];
//     }
//     return token;
// }

app.post("/signup",function(req,res){
  const username = req.body.username;
  const password = req.body.password

  users.push({
    username:username,
    password:password,
  })

  res.json({
    message:"You Are signup "
  })
})

app.post("/signin",function(req,res){
    const username = req.body.username;
    const password = req.body.password

    // const user = users.find(function(u){
    //     if (u.username = username) {
    //         return true
    //     }else{
    //         return false 
    //     }
    // })

    let foundUser = null
    for (let i = 0; i < users.length; i++) {
       if (users(i).username == username && users[i].password == password) {
        foundUser =users[i]
       }
    }

    if (foundUser) {
        const token = generateToken()
        foundUser.token = token;
        res.json({
            message : "Sucessfully user Login"
        })
    }
})


app.get("/me", (req, res) => {
    const token = req.headers.authorization;
    const user = users.find(user => user.token === token);
    if (user) {
        res.send({
            username: user.username
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
})

app.listen(3000)