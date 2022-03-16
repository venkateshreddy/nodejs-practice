
const { mongoose} =require("../mongoose");

//this is students schema. how the data should look like in the students collections
const StudentsSchema= new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    gender:{
     type:String, 
     required:true,
     enum :["Male","Female","Others"]
     
   },
   dob:{
     type:Date,
     required:true
   },
   branch:{
     type:String,
     required:true
    },
   college:{
     type:String,
     required:true
   },
   email:{
     type:String,
     required:[true,"email is required"],
     unique:true,
     validate: () =>{
     return false;
     }
   }
 
  },{
    timestamps:true
  })
 // this students module.which connected the students and  the schema
  const StudentsModule=mongoose.model('students',StudentsSchema);

  module.exports ={
      StudentsModule
  }