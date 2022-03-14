<<<<<<< HEAD
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
=======

        const express=require("express");
        const { myData ,save} = require("./facultyhelper");
        const application=express();
        
        application.use(express.json());
        application.use(express.urlencoded({extended:true}));

        const facultyindex=myData();
        application.get('/',function(req,res){
            res.send({message:"Welcome to Faculty Management System"});
        });
        application.get("/facultyindex",function(req,res){
            res.send(facultyindex);
        });
        application.get("/facultyindex/search-by-qualification/:qualification",function(req,res){
            const filteredFaculty=facultyindex.filter(fac=>fac.qualification==req.params.qualification);
            res.send(filteredFaculty);
        });
        application.get("/facultyindex/search-by-gender/:gender",function(req,res){
            const filteredFaculty=facultyindex.filter(fac=>fac.gender==req.params.gender);
            res.send(filteredFaculty);
        });
        application.get("/facultyindex/filter-by-experience/:min/:max",function(req,res){
            const filteredFaculty=facultyindex.filter((fac)=>fac.YOE>=req.params.min && fac.YOE<=req.params.max);
            res.send(filteredFaculty);
        });
        application.get("/facultyindex/filter-by-designation/:designation",function(req,res){
            const filteredFaculty=facultyindex.filter(fac=>fac.designation==req.params.designation);
            res.send(filteredFaculty);
        });
        application.post("/facultyindex/create",(req,res)=>{
            const newFaculty={id:facultyindex.length+1,...req.body};
            facultyindex.push(newFaculty);
            save(facultyindex);
            res.send(facultyindex);
        });
        application.put("/facultyindex/update/:facid",(req,res)=>{
            const updatedFaculty=facultyindex.map(faculti=>{
                if(faculti.id.toString()===req.params.facid){
                    const updateFaculty={
                        ...faculti,...req.body
                    };
                    return updateFaculty;
                }else{
                    return faculti;
                }
            });
            save(updatedFaculty);
            res.send(updatedFaculty);
        });
        application.delete('/facultyindex/delete/:id',(req,res)=>{
            const remainingFaculty=facultyindex.filter(fac=>fac.id!=req.params.id);
            save(remainingFaculty);
            res.send(remainingFaculty);
        })
        application.listen(3333);
>>>>>>> main
