const mongoose =require("mongoose")
//connection to mongoose
 mongoose.connect("mongodb://localhost/college-management").then(()=>{
console.log("Connected to MongoDB");
     }).catch(error=>{
         console.log(error) 
        });

        module.exports={
            mongoose
        }
