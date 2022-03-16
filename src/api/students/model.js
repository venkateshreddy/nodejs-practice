const{mongoose}=require("../mongoose-config")

//this is student schema.how the data should like in the students collections
const studentsSchema = new mongoose.Schema({
    name:{
       type:String,
       required:true
    },
    gender:{
       type:String,
       required:true,
       enum:["Male","Female","Transgender","Others"]
    },
    dob:{
       type:Date,
       required:true
    },
    branch:{
       type:String,
       required:true
    },
    about:{
       type:String
    },
    email:{
       type:String,
       required:[true,"email is required"],
       unique:true
    }
   },{
     timestamps:true
    })
  
 //this is students model which connects the table and schema
  const studentsModel = mongoose.model('students',studentsSchema);

  module.exports={
     studentsModel
  }