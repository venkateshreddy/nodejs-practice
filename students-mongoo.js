const express=require('express');
const application=express();
application.use(express.json());
application.use(express.urlencoded({ extended:true }));
const mongoose=require("mongoose");

//connect to mongoose
 mongoose.connect("mongodb://localhost/college-management").then(()=>{
 console.log("Connected to mongodb");
 })
 .catch(err=>{
 console.log("err");
 })
 
   //  studentsModel.create({name:"Ram", gender:"Male","dob":new Date("12/5/2000"),branch:"EEE"})
   //  studentsModel.create({name:"Laxman", gender:"Male",branch:"ECE"})
   

application.get('/',function (req,res){
res.send({message:"Welcome to the college management system"});
})

application.get('/students',function (req,res){
studentsModel.find({},(err,data)=>{
   if(err){
      res,send({error:true,message:"Unable to fetch the data"})
   }else{
      res.send(data);
   }
})
})

application.get('/students/search-by-gender',function (req,res){
studentsModel.find({gender:req.query.gender},(err,data)=>{
if(err){
   res.send({error:true,message:"Unable to search by gender"})
}else{
   res.send(data)
}
})
})

application.get('/students/search-by-branch/:branch',function (req,res){
   studentsModel.find({branch:req.params.branch},(err,data)=>{
   if(err){
      res.send({error:true,message:"Unable to search by gender"})
   }else{
      res.send(data)
   }
   })
})

application.post('/students/create',(req,res)=>{
const newEmployee={...req.body}
studentsModel.create(req.body,(err,data)=>{
if(err){
res.send({error:true,message:"Unable to insert student record"})
}else{
res.send(data)
}
})
})
 
application.put("/students/update/:id",(req,res)=>{ 
studentsModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,data)=>{
if(err){
res.send({error:true,message:"Unable to update student record"})
}else{
res.send(data);
}
})
})

application.delete("/students/delete/:id",(req,res)=>{  
studentsModel.findByIdAndRemove(req.params.id,(err,data)=>{
if(err){
res.send({error:true,message:"Unable to update delete record"})
}else{
res.send(data);
} 
})
})

application.listen(4000)

