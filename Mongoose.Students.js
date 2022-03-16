
const express = require('express');
const application = express();
const mongoose=require("mongoose");


application.use(express.json());
application.use(express.urlencoded({ extended: true }));


//connected to Mongoose
 mongoose.connect("mongodb://localhost/students").then(()=>{
   console.log("Connected to Mongoose");
 })
 .catch(()=>{
   console.log(err)
 })

 //this is students schema. how the data should look like in the students collections
  const StudentsSchema= new mongoose.Schema({
    name:{
      type:String
    },
    gender:{
     type:String
   },
   dob:{
     type:Date
   },
   branch:{
     type:String
   },
   college:{
     type:String
   }
 
  })
 // this students module.which connected the students and  the schema
  const StudentsModule=mongoose.model('students',StudentsSchema);
 
StudentsModule.create(
  {name:"Pranay",gender:"Male","dob":new Date("12/04/1995"),branch:"CSE",college:"Kits"},
  {name:"Naveena",gender:"Female","dob":new Date("12/04/1999"),branch:"CSE",college:"Kits"}
  )
 
application.get('/', function (req, res) {
  res.send({ message: "welocome to Student management System" })

})

application.get('/students', function(req,res)  {
  StudentsModule . find({}, (err,data) =>{
    if(err){
      res.send({error:true, message:"Unable to fetch the data"});
    }else{
      res.send(data)
    }
  })
})

application.post('/students/add' , function (req,res) {
   StudentsModule.create(req.body,(err,data)=>{
     if(err){
       res.send({ error:true , message:"Unable To Insert The Data"});
     }else{
       res.send(data)
     }
   })
})

application.get('/students/search-by-gender', function (req, res) {
  StudentsModule.find({gender:req.query.gender},(err,data)=>{
    if(err){
      res.send({ error:true , message:"Unable To search The Data"});
    }else{
      res.send(data)
    }
  })
})
application.get('/students/search-by-branch/:branch', function (req, res) {
  StudentsModule.find({branch:req.params.branch},(err,data)=>{
    if(err){
      res.send({ error:true , message:"Unable To search The Data"});
    }else{
      res.send(data)
    }
  })
})
application.listen(3030);

application.put('/students/update/:id' ,function(req,res){
  StudentsModule.findByIdAndUpdate(req.params.id,req.body, {new:true},(err,data)=>{
    if(err){
      res.send({ error:true , message:"Unable To update The Data"});
    }else{
      res.send(data)
    }
  })
})

application.delete('/students/delete/:id',function(req,res){
  StudentsModule.findByIdAndRemove(req.params.id,req.body,(err,data)=>{
    if(err){
      res.send({ error:true , message:"Unable To delete The Data"});
    }else{
      res.send(data)
    }
  
  })
})








