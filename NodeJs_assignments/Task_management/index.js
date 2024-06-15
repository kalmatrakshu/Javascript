const express = require("express")
const app = express()
const dotenv = require('dotenv').config()
const routes = require("./router/router")


app.use(express.json())

port = process.env.PORT

app.use("/api", routes )

app.listen(port, function(err){
    if(err){
        console.log("there is an error in starting the server")
    }
    console.log("Server is running at port "+ port)
})