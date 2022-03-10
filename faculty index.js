const express = require('express')
const application = express();

const fileSystem=require("fs")
application.use(express.json());
application.use(express.urlencoded({ extended:true }));

const jsonData=fileSystem.readFileSync("./faculty.json")
const facultyDataFromFile=jsonData.toString();

const faculty=JSON.parse(facultyDataFromFile) 
console.log(faculty);

application.get('/faculty',function (req,res){
res.send(faculty)
})

application.post('/faculty/adddata',(req,res)=>{
    // console.log(req.body);
    // res.send(req.body)
  
const newFaculty={id:faculty.length + 1, ...req.body}
faculty.push(newFaculty) 
     
fileSystem.writeFileSync('./faculty.json',JSON.stringify(faculty))
res.send(faculty); 
})

application.listen(3030)