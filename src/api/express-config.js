const express=require('express');
const application=express();

application.use(express.json());
application.use(express.urlencoded({ extended:true }));

application.get('/',function (req,res){
    res.send({message:"Welcome to the college management system"});
    })
    
application.listen(4000)
module.exports={
    application
}