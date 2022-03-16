const res = require("express/lib/response");
const {studentsModel}=require("./model")

module.exports={
    getAllStudents:(req,res) => {
    studentsModel.find({},(error,data)=>{
        if(error){
        res.send({error:true,type:error.name,message:error.message})
        }else{
        res.send(data);
        }
        })
},
createStudents:(req,res) =>{
    studentsModel.create(req.body,(error,data)=>{
        if(error){
        res.send({error:true,type:error.name,message:error.message})
        }else{
        res.send(data)
        }
        })
},
searchByBranch:(req,res) =>{
    studentsModel.find({gender:req.query.gender},(error,data)=>{
        if(error){
        res.send({error:true,type:error.name,message:error.message})
        }else{
        res.send(data)
        }
        })
},
searchByBranch:(req,res) =>{
    studentsModel.find({branch:req.params.branch},(error,data)=>{
        if(error){
        res.send({error:true,type:error.name,message:error.message})
        }else{
        res.send(data)
        }
        })  
},
updateStudents:(req,res) =>{
    studentsModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(error,data)=>{
        if(error){
        res.send({error:true,type:error.name,message:error.message})
        }else{
        res.send(data);
        }
        })
},
deleteStudents:(req,res) =>{
    studentsModel.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error){
           res.send({error:true,type:error.name,message:error.message})
        }else{
        res.send(data);
        } 
        })  
}
}