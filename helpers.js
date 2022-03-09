
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


