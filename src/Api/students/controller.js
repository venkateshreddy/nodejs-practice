
module.exports={
GetAllStudents: (req,res) => {
    StudentsModule . find({}, (error,data) =>{
      if(error){
        res.send({error:true ,type:error.name, message:error.message});
      }else{
        res.send(data)
      }
    })
},
CreteStudent : function (req,res) {
    StudentsModule.create(req.body,(error,data)=>{
      if(error){
       res.send({error:true ,type:error.name, message:error.message});
      }else{
        res.send(data)
      }
    })
 },
 searchbygender: (req, res)=> {
    StudentsModule.find({gender:req.query.gender},(error,data)=>{
      if(error){
        res.send({error:true ,type:error.name, message:error.message});
      }else{
        res.send(data)
      }
    })
  },
  searchbybranch: (req, res) =>{
    StudentsModule.find({branch:req.params.branch},(error,data)=>{
      if(error){
        res.send({error:true ,type:error.name, message:error.message});
      }else{
        res.send(data)
      }
    })
  },
  UpdateStudent:(req,res) =>{
    StudentsModule.findByIdAndUpdate(req.params.id,req.body, {new:true},(error,data)=>{
      if(error){
        res.send({error:true ,type:error.name, message:error.message});
      }else{
        res.send(data)
      }
    })
  },
  DeleteStudent:(req,res)=>{
    StudentsModule.findByIdAndRemove(req.params.id,req.body,(error,data)=>{
      if(error){
        res.send({error:true ,type:error.name, message:error.message});
      }else{
        res.send(data)
      }
    
    })
  }
}