const fileSystem=require("fs");
module.exports={
     save:(changes)=> {
        fileSystem.writeFileSync('./students.json',JSON.stringify(changes));
    },
    
    newData:()=>{
    //read students json file
    const jsonData = fileSystem.readFileSync("./students.json");
    const studentsDataFromFile = jsonData.toString();
    //and convert it to valid JSON and assign it to students
    const students = JSON.parse(studentsDataFromFile);
     return students;
    }
}