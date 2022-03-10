
const express =require('express');

const application = express();

const fileSystem = require("fs");
application.use(express.json());
application.use(express.urlencoded({ extended: true }));



const jsonData = fileSystem.readFileSync("./student.json");

const studentsDataformfile = jsonData.toString()

const students = JSON.parse(studentsDataformfile)
console.log(students)



application.get('/students', function (req, res) {
  res.send(students);
})

application.get('/students/search-by-Branch', function (req, res) {
  const filteredstudents = students.filter(student => student.Branch== req.body.Branch)
  res.send(filteredstudents);
})


application.post('/students/add', (req,res) =>{
  const newstudents = {id : students.length+1,...req.body};
  students.push(newstudents);
saveChanges(students)
  res.send(students);
})


application.put('/students/update/:studentid', (req, res) => {
 
  const updatedstudents = students.map(students => {
    console.log(students.id,req.params.studentid);

    if(students.id.toString() === req.params.studentid) {
      const updatedstudent = { ...students, ...req.body }

      return updatedstudent;
    } else {
      return students;
    }
  })
 saveChanges(updatedstudents)
  res.send(updatedstudents);
})

application.delete('/students/delete/:id',(req,res)=>{
  const remainingStudents =students.filter(student =>{
     {
       if(student.id == req.params.id){
         return false;
       }else{
         return true;
       }
     }
  })
console.log(remainingStudents);

saveChanges(remainingStudents)

res.send(remainingStudents);
})

function saveChanges(changes){

  fileSystem.writeFileSync('./student.json',JSON.stringify(changes));
}
application.listen(2323);