const express = require("express")
const application = express();
application.use(express.json());
application.use(express.urlencoded({extended: true}));
application.listen(7070)


application.get("/", function(req,res){
    res.send({message:"Welcome To College Management System"})
    });


module.exports ={
    application
}