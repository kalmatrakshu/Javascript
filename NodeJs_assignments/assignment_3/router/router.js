const express = require("express");
const router = express.Router();
const connection = require("../mySql/mySql.js");
const error_handler = require("../controler/error_controller.js")


// router.get("/", function(req, res){
//     res.json({
//         "message": "This is my first Userinfo request implemented"
//     });
// });

router.get("/", function(req,res){
    const user_query = "select * from books"
    connection.query(user_query, function(error, results){
        if(error){
            error_handler(error, req, res, 400)
        }else{
            if(results.length){
                const response_body = results
                res.set({"Content-Type":"application/json"})
                res.statusCode = 200
                res.send(response_body)
            }else{
                res.send({"message":"No Users"})
            }
        }
    })
    // res.send("This is my first API request implemented")
})

router.get("/bookinfo", function(req,res){
    const user_id =req.query.user_id
    if(user_id){
        const user_query = "select * from books where user_id?"
        connection.query(user_query,[user_id] ,function(error, results){
            if(error){
                error_handler(error, req, res, 400)
            }else{
                if(results.length){
                    const response_body = results
                    res.set({"Content-Type":"application/json"})
                    res.statusCode = 200
                    res.send(response_body)
                }else{
                    res.send({"message":"No Users"})
                }
            }
        })

    }else{
        error_handler("User Id is missing", req, res, 400)
    }
   
    // res.send("This is my first API request implemented")
})

module.exports = router;
