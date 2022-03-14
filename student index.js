const express = require('express')
const application = express();

const fileSystem=require("fs")
application.use(express.json());
application.use(express.urlencoded({ extended:true }));

const jsonData=fileSystem.readFileSync("./students.json")
const studentsDataFromFile=jsonData.toString();

const students=JSON.parse(studentsDataFromFile) 
console.log(students);

application.get('/students',function (req,res){
res.send(students)
})

application.get('/students/search-by-branch',function (req,res){
const filteredStudents=students.filter(stu => stu.branch == req.query.branch)
res.send(filteredStudents);
})

application.post('/students/add',(req,res)=>{
    // console.log(req.body);
    // res.send(req.body)
  
const newStudent={id:students.length + 1, ...req.body}
students.push(newStudent) 
     
fileSystem.writeFileSync('./students.json',JSON.stringify(students))
res.send(students); 
})

application.put("/students/update/:stuid",(req,res)=>{  
    const updatedStudents = students.map(student =>{
       console.log(student.id,req.params.stuid)
       
       if(student.id.toString() === req.params.stuid){  
    
       const updatedStudent={  
          ...student,
          ...req.body
       }
      return updatedStudent;
       }else{
          return student;
       }
    })
    
    fileSystem.writeFileSync('./students.json',JSON.stringify(updatedStudents));
    res.send(updatedStudents);
    })
    
application.listen(3030)