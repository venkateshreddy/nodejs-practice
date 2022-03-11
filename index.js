<<<<<<< HEAD
const { urlencoded } = require('express');
const express = require('express');
const techapp = express()

techapp.use(express.json())
techapp.use(express.urlencoded({extended:true}))


 const fs = require("fs")

// jsonData=fs.readFileSync('./teachers.js')
// console.log(jsonData)
// console.log('stage2')
// teachersDataFromFile = jsonData.toString()
//  const teachers = JSON.parse(teachersDataFromFile)
// console.log('stage3')


//applying promise 
function readFile(filename){
  console.log('stage-1')
  return new Promise((resolve,reject)=>{
const teachersdata = fs.readFile('./teachers.js',(err, data)=>{
   
    console.log('stage-2')
    if(err){
        reject('error in reading file')
    }
    else{
        
  const  teachersDataFromFile = data.toString()
   const teachers = JSON.parse(teachersDataFromFile) 

   resolve(teachers)

    }
})
})



 } 
 console.log('stage-3')
   let teachers = []
     async function  loadteachers(){ 
          teachers =await readFile('./teachers.js')
    console.log(teachers)
 }loadteachers();
 console.log('stage-4')

// console.log(fileDataPromise) //promise pending
// fileDataPromise.then((result)=>{
//   console.log(result)
// })

// .catch((err)=>{
//     console.log(err)
// })
// console.log('stage-4')

techapp.get('/',(req,res)=>{
    res.send(teachers)
})

techapp.get('/teachers',(req,res)=>{
    res.send(teachers)
})

techapp.get('/teachers/gender/:gender',(req,res)=>{
    const genderarray = teachers.filter((teacher)=>teacher.gender === req.params.gender)
    res.send(genderarray)
})

techapp.get('/teachers/search-by-yoe/:min/:max',(req,res)=>{
 const experiencearray = teachers.filter((teacher)=>(teacher.yoe >= req.params.min)&&(teacher.yoe<= req.params.max))
 res.send(experiencearray)
})

techapp.post('/teachers/create',(req,res)=>{
    console.log(req.body)
   const newTeachers = { id:teachers.length +1 , ...req.body}
     teachers.push(newTeachers)
    // fs.writeFileSync('./teachers.js',JSON.stringify(teachers))
    save(teachers)
    res.send(teachers)
})


techapp.put('/teachers/update/:id',(req,res)=>{
   const updatedTeacher = teachers.map((teachers)=>{
          if(teachers.id == req.params.id){
            const updatedTeacher={
                ...teachers,
                ...req.body
            }
            return updatedTeacher;
          }else{
              return teachers;
          }
    })

    // fs.writeFileSync('teachers.js',JSON.stringify(updatedTeacher))
    save(updatedTeacher)
    res.send(updatedTeacher)
})

techapp.delete('/teachers/delete/:id',(req,res)=>{
 const remainingteachers =   teachers.filter((teach)=>(teach.id != req.params.id))
    // fs.writeFileSync('./teachers.js',JSON.stringify(remainingteachers))
    save(remainingteachers)
    res.send(remainingteachers)
})


function save(changes){
    fs.writeFileSync('./teachers.js',JSON.stringify(changes))
}


techapp.listen(5500)
=======
const express = require("express");
const { getData, save } = require("./helpers");
const application = express();

//add the two line below to tell the express application that it should handle req body
application.use(express.json());
application.use(express.urlencoded({ extended: true }));

//calling getData function toread the employees from the json file
const employees = getData

application.get("/", function (req, res) {
  res.send({ message: "Welcome to Employee Management System" });
});

application.get("/employees", function (req, res) {
  res.send(employees);
});

application.get("/employees/search-by-qualification", function (req, res) {
  //http://<url>?key1=value1&key2=value2
  const filteredEmployees = employees.filter(
    (emp) => emp.qualification == req.query.qualification
  );
  res.send(filteredEmployees);
});

application.get("/employees/search-by-gender/:gender", function (req, res) {
  //http://<url>/param1
  const filteredEmployees = employees.filter(
    (emp) => emp.gender == req.params.gender
  );
  res.send(filteredEmployees);
});

application.get(
  "/employees/filter-by-experience/:min/:max",
  function (req, res) {
    //http://<url>/param1/param2
    const filteredEmployees = employees.filter(
      (emp) => emp.YOE >= req.params.min && emp.YOE <= req.params.max
    );
    res.send(filteredEmployees);
  }
);

application.post("/employees/create", (req, res) => {
  const newEmployee = { id: employees.length + 1, ...req.body };
  employees.push(newEmployee); //add new employee to array
  save(employees);
  res.send(employees); //send the whole employees array to the client
});

application.put("/employees/update/:empid", (req, res) => {
  //update existing employee data
  const updatedEmployees = employees.map((employee) => {
    console.log(employee.id, req.params.empid, 'checking here');
    if (employee.id.toString() === req.params.empid) {
        console.log("Inside if condition")
      //update that employee
      const updatedEmployee = {
        ...employee,
        ...req.body
      };
      return updatedEmployee;
    } else {
      return employee;
    }
  });
  save(updatedEmployees);
  res.send(updatedEmployees);
});


application.delete('/employees/delete/:id', (req, res) => {
    const remainingEmployees = employees.filter(emp => emp.id != req.params.id);
    save(remainingEmployees);
    res.send(remainingEmployees);
})

application.listen(8080);
>>>>>>> main
