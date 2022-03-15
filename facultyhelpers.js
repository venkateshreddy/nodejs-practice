

 
 const filesystem = require("fs")
 
module.exports ={

     save :(changes)=>{

        filesystem.writeFileSync("./faculty.json", JSON.stringify(changes))
    },
    
     getData :() =>{
        return new Promise((resolve, reject) => {
         console.log("handle 1");
          filesystem.readFile("./faculty.json",(err,jsonData)=>{
              console.log("handle 2");
              if(err){
                //   console.log("err occured");
                  reject(err)
              }
              else{
                const FacultyDatafromfile = jsonData.toString();
                const faculty = JSON.parse(FacultyDatafromfile)
                resolve(faculty)
              }
           
          });
         
         })
       
    }

}
 
 