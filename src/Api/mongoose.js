
const { mongoose } = require('mongoose');
//connected to Mongoose
mongoose.connect("mongodb://localhost/students").then(()=>{
    console.log("Connected to Mongoose");
  })
  .catch(()=>{
    console.log(err)
  })
 
  module.exports ={
      mongoose
  }