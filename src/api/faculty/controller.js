const { FacultyModel } = require("./model");
module.exports = {
    GetAllFaculities : (req,res)=>{
        FacultyModel.find({},(error,facultydata)=>{
    if(error){
        res.send({error:true,type:error.name,message:error.message})
    }else{
        res.send(facultydata)
    }
        })
    },
    CreateFaculty : (req,res)=>{
        FacultyModel.create(req.body,(error,facultydata)=>{
    if(error){
        res.send({error:true,type:error.name,message:error.message})
    }else{
        res.send(facultydata)
    }
        })
    },
    SearchByGender:(req,res)=>{
        FacultyModel.find({gender:req.query.gender},(error,facultydata)=>{
           
           if(error){
            res.send({error:true,type:error.name,message:error.message})
           }else{
               res.send(facultydata)
           }
        })
    },
    SearchByBranch:(req,res)=>{
        FacultyModel.find({branch:req.params.branch},(error,facultydata)=>{
           
           if(error){
            res.send({error:true,type:error.name,message:error.message})
           }else{
               res.send(facultydata)
           }
        })
    },
    UpdateFaculty:(req,res)=>{
        FacultyModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(error,facultydata)=>{
    if(error){
        res.send({error:true,type:error.name,message:error.message})
        }else{
            res.send(facultydata)
        }
        })
    },
    DeleteFaculty:(req,res)=>{
        FacultyModel.findByIdAndRemove(req.params.id,(error,facultydata)=>{
            if(error){
                res.send({error:true,type:error.name,message:error.message})
            }else{
                res.send(facultydata)
            }
        })
    }
}