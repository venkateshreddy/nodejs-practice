  
const {mongoose} = require("../mongoose-config")
    
    //faculty schema
    const FacultySchema =new mongoose.Schema ({
        name:{
            type:String,
            required: 'This field is required'
        },

        email:{
            type:String, unique:true,required:true
        },
        gender:{
            type:String,
            required:true,
            enum:['Female','Male','Others']
        },
        DOB:{
            type:Date,

        },
       branch:{
           type:String
       } 
      
       
    },{
timestamps:true
    })
  
    
 const FacultyModel = mongoose.model('faculty',FacultySchema);

 module.exports=
 {
     FacultyModel
 }