// const { query } = require('express');
const express = require('express');
// const res = require('express/lib/response');

const application = express();

const fileSystem = require("fs");
application.use(express.json());
application.use(express.urlencoded({extended:true}));



const jsonData = fileSystem.readFileSync("./faculty.json");

const facultyDataformfile = jsonData.toString()

const faculty= JSON.parse(facultyDataformfile)
console.log(faculty)


application.get('/faculty', function (req, res) {
    res.send(faculty);
  })


  application.post('/faculty/create',(req,res) =>{
 
    const newfaculty = {id : faculty.length+1,...req.body};
    faculty.push(newfaculty);
   saveChanges(faculty)
    res.send(faculty);

  })


  application.put('/faculty/update/:facultyid', (req, res) => {
 
    const updatedfaculty = faculty.map(faculty => {
      console.log(faculty.id,req.params.facultyid);
  
      if(faculty.id.toString() === req.params.facultyid) {
        const updatedfaculty = { ...faculty, ...req.body }
  
        return updatedfaculty;
      } else {
        return faculty;
      }
    })
    saveChanges(updatedfaculty)
    res.send(updatedfaculty);
  })


application.delete('/faculty/delete/:id',(req,res)=>{
  
const remainingFaculty =faculty.filter (faculty=>{
     
  {
    if(faculty.id == req.params.id){
      return false;
    }else{
      return true;
    }
  }
})

console.log(remainingFaculty);
saveChanges(remainingFaculty)
res.send(remainingFaculty)

})

function saveChanges(changes){
fileSystem.writeFileSync('./faculty.json',JSON.stringify(changes))
}

  application.listen(4545);