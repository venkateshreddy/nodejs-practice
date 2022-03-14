

const fileSystem=require("fs");  //helps to read and write files

module.exports = {
    save:(changes)=>{
    fileSystem.writeFileSync('./employees.json',JSON.stringify(changes));  
    },
    getData:()=>{
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
}

// console.log("stage1");
// const jsonData=fileSystem.readFile("./employees.json",(err,data)=>{
// console.log("stage2");
// console.log(err,'err');
// console.log(data,'data')
// })
// for(let i=3; i<=1000; i++){
// console.log("stage3",i);
// }
// return [];


const fileSystem=require("fs");
module.exports={
     save:(changes)=> {
        fileSystem.writeFileSync('./engineers.json',JSON.stringify(changes));
    },
    
    getData:()=>{
    //read engineers json file
    const jsonData = fileSystem.readFileSync("./engineers.json");
    const engineersDataFromFile = jsonData.toString();
    //and convert it to valid JSON and assign it to engineers
    const engineers = JSON.parse(engineersDataFromFile);
     return engineers;
    }
}



const fileSystem = require("fs"); //helps to read and write files
module.exports = {
    save: (changes) => {
        fileSystem.writeFileSync('./employees.json', JSON.stringify(changes));
    },
    getData: () => {
        return new Promise((resolve, reject) => {
            //read employees json file
            console.log("Stage 1");
            fileSystem.readFile("./employees.json", (err, jsonData) => {
                console.log("Stage 2");
                if(err) {
                    console.log("error place")
                    reject(err);
                } else {
                    const employeesDataFromFile = jsonData.toString();
                    //and covert it to valid JSON and assign it to employees
                    const employees = JSON.parse(employeesDataFromFile);
                    resolve(employees);
                }
            })
        })
    }
}

