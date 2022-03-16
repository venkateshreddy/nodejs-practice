const express = require("express")

const application = express();
application.use(express.json());
application.use(express.urlencoded({extended: true}));
    
const mongoose =require("mongoose")
//connection to mongodb
 mongoose.connect("mongodb://localhost/college-management").then(()=>{
console.log("Connected to MongoDB");
     }).catch(error=>{
         console.log(error) 
        })


     //faculty schema
 const FacultySchema =new mongoose.Schema ({
     name:{
         type:String
     },
     gender:{
         type:String
     },
     DOB:{
         type:Date
     },
    branch:{
        type:String
    } 
 })
//which connects to the table and schema
 const FacultyModel = mongoose.model('faculty',FacultySchema);

application.get("/", function(req,res){
res.send({message:"Welcome To College Management System"})
});
application.get("/faculty",function(req,res){
    FacultyModel.find({},(err,facultydata)=>{
if(err){
    res.send({err:true,message:"Unable to fetch facultydata"})
}else{
    res.send(facultydata)
}
    })
})

application.post("/faculty/create",(req,res)=>{
    FacultyModel.create(req.body,(err,facultydata)=>{
if(err){
    res.send({err:true,message:"Unable to insert faculty record"})
}else{
    res.send(facultydata)
}
    })
});
application.get("/faculty/search-by-gender",(req,res)=>{
    FacultyModel.find({gender:req.query.gender},(err,facultydata)=>{
       
       if(err){
           res.send({err:true,message:"Unable to find by gender"})
       }else{
           res.send(facultydata)
       }
    })
})

application.get("/faculty/search-by-branch/:branch",(req,res)=>{
    FacultyModel.find({branch:req.params.branch},(err,facultydata)=>{
       
       if(err){
           res.send({err:true,message:"Unable to find by branch"})
       }else{
           res.send(facultydata)
       }
    })
});

application.put("/faculty/update/:id",(req,res)=>{
    FacultyModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,facultydata)=>{
if(err){
    res.send({err:true,message:"Unable to update faculty records"})
    }else{
        res.send(facultydata)
    }
    })
});
application.delete("/faculty/delete/:id",(req,res)=>{
    FacultyModel.findByIdAndRemove(req.params.id,(err,facultydata)=>{
        if(err){
            res.send({err:true,message:"Unable to delete faculty record "})
        }else{
            res.send(facultydata)
        }
    })
})

application.listen(7070)