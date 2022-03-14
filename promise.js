const fileSystem = require("fs");

const getDataPromise = getData();   //this function return a promise

let employees = [];

 getDataPromise.then(result =>{  //here getData function will return a promise
  employees = result; 
  console.log(employees,"final submit");          //then part will be excuted on successful data return
}) 
.catch(err =>{                //catch part will be executed when promise rejects (error)
  console.log("Received error");
  return;
})

function getData() {
    return new Promise((resolve,reject) => {
    console.log("stage1")
     //read employees json file 
     fileSystem.readFile("./employees.json",(err,jsonData) => {
       console.log("stage2");
       if(err){
         console.log(error);
       reject(err)
       }else{
         const employeesDataFromFile=jsonData.toString();
         //and convert it to valid JSON and assign it to employees
         const employees=JSON.parse(employeesDataFromFile)
         resolve(employees); 
       }
     })
  })
 }
 
 