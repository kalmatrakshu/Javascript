const express = require("express");
const app = express();
const dotenv = require('dotenv').config();
const router = require("./router/router.js");

const port = process.env.PORT;
app.use(express.json()); // you cannot call router before using json.
app.use("/api", router);

app.listen(port, function(err){
    if(err){
        console.log("There is an error in starting the server");
    } else {
        console.log("Server is running at port " + port);
    }
});
