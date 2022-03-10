
const fileSystem =require ("fs");
  
module.exports ={
   Savechanges:(Changes)=>{

    fileSystem.writeFileSync('./employees.json', JSON.stringify(Changes))
   },
   
   getdata:() =>{
      return new Promise((resolve,reject) =>{
         console.log("Stage 1");
  const jsonData = fileSystem.readFile("./employees.json" , (err,jsonData)=>{
     
   console.log("Stage 2");
   console.log("err place");
    if(err){
       reject(err);
    }
    else{
  const employeesDataformfile = jsonData.toString()
  const employees = JSON.parse(employeesDataformfile)

 resolve (employees);
    }
      })
   })
   }
  
// getdata:() =>{
//    console.log("Stage 1");
//     const jsonData =fileSystem.readFile("./employees.json" ,(err,data)=>{
//       console.log("Stage 2");
//        console.log(err,'err');
//        console.log(data,'data');

//  for(i=3 ; i<=1000; i++){
//    console.log("Stage 1");
//    const jsonData =fileSystem.readFile("./employees.json" ,(err,data)=>{
//      console.log("Stage Anther read file");
//       console.log(err,'err');
//       console.log(data,'data');
//    console.log("Stage ",i);
//    })
//  }

//     })

   

//     return [];
//    }
}

