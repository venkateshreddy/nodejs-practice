
const express = require('express');


const { getdata,Savechanges} =require("./helpers")

// const res = require('express/lib/response');


const application = express();



application.use(express.json());
application.use(express.urlencoded({ extended: true }));
// const fileSystem = require("fs");

// Calling getdata to read the employees for Json-file
// let employees = getdata(); //here getdata function will return a promise

let employees =[];

const getdataPromise = getdata();

getdataPromise.then(result =>{

  employees = result;
})
.catch(err =>{
  console.log("Unable to load employees from JSON");
  return ;
})



console.log(employees,'mployees'); //2nd print statement





// //read employee in json file
// const jsonData = fileSystem.readFileSync("./employees.json")

// const employeesDataformfile = jsonData.toString()
// //&convert it in valid Json & assign it to employees
// const employees = JSON.parse(employeesDataformfile)
// console.log(employees)

application.get('/', function (req, res) {
  res.send({ message: "welocome to employee management" })

})

application.get('/employees', function (req, res) {
  res.send(employees);
})

application.get('/employees/search-by-desgination', function (req, res) {
  const filteredmployees = employees.filter(emp => emp.desgination == req.query.desgination)
  res.send(filteredmployees);
})

application.get('/employees/search-by-gender/:gender', function (req, res) {
  console.log(req.params)
  const filteredmployees = employees.filter(emp => emp.gender == req.params.gender)
  res.send(filteredmployees);
})

application.get('/employees/filterd-by-experences/:min/:max', function (req, res) {
  // console.log(req.params)
  const filteredmployees = employees.filter(emp => (emp.YOE >= req.params.min) && (emp.YOE <= req.params.max))
  res.send(filteredmployees);
})




application.post('/employees/create', (req, res) => {
// create newEmployee with dynamic id
const newEmployee = {id : employees.length+1,...req.body};
// push newEmployee to employee array
 
  employees.push(newEmployee);//add new employee to array

  Savechanges(employees)

  res.send(employees);//send the whole employee to the cilent
})

application.put('/employees/update/:empid', (req, res) => {
  //update exisiting  employees body
  const updatedEmployees = employees.map(employee => {
    console.log(employee.id,req.params.empid,'checking here');

    if(employee.id.toString() === req.params.empid) {

      console.log("inside the condition")
      //update that employee
      const updatedEmployee = { ...employee, ...req.body }


const {getData,save} = require("./helpers")


const Application=express();

//add two lines to tell the express application for handle the body(post method)
Application.use(express.json());
Application.use(express.urlencoded({ extended:true }));

//calling getData function to read the employees from jsonfile
let Employees = [];
 const gedataPromise = getData();
 gedataPromise.then(result =>{  //here getData function will return a promise
  Employees = result;
}) 
.catch(err =>{
  console.log("Received error");
  return;
})
console.log(employees,'Employees'); //second print statement

application.get('/',function (req,res){
res.send({message:"Welcome to the employee management system"});
})

application.get('/employees',function (req,res){
res.send(employees)
})

application.get('/employees/search-by-qualification',function (req,res){
// console.log(req.body,'-',req.params,'-',req.query);

const filteredEmployees=employees.filter(emp => emp.qualification == req.query.qualification)
res.send(filteredEmployees);
})

application.get('/employees/search-by-gender/:gender',function (req,res){
 const filteredEmployees=employees.filter(emp => emp.gender == req.params.gender)
res.send(filteredEmployees);
})

application.get('/employees/search-by-experience/:min/:max',function (req,res){
const filteredEmployees=employees.filter(emp =>( emp.YOE >= req.params.min) && (emp.YOE <= req.params.max))
res.send(filteredEmployees);
})

application.post('/employees/create',(req,res)=>{
//create neew employee with dynamic id
   const newEmployee={id:employees.length + 1, ...req.body}
//push that new employees to employees array
   employees.push(newEmployee) //add new employee to array
 
   save(employees);
   // fileSystem.writeFileSync('./employees.json',JSON.stringify(employees))
   res.send(employees);  //send the whole employees array to the client
   })
   
application.put("/employees/update/:empid",(req,res)=>{  //update existing employee data
const updatedEmployees = employees.map(employee =>{
   console.log(employee.id,req.params.empid,'checking here')
   
   if(employee.id.toString() === req.params.empid){   //update that employee

   const updatedEmployee={  
      ...employee,
      ...req.body
   }
  return updatedEmployee;
   }else{
      return employee;
   }
})
save(updatedEmployees);
// fileSystem.writeFileSync('./employees.json',JSON.stringify(updatedEmployees));
res.send(updatedEmployees);
})

// application.delete("/employees/delete/:id",(req,res)=>{  //update existing employee data
//    const remainingEmployees = employees.filter(emp =>{
//       if(emp.id == req.params.id){
//          return false;
//       }else{
//          return true;
//       }
//    })
//    console.log(remainingEmployees);
//     fileSystem.writeFileSync('./employees.json',JSON.stringify(remainingEmployees));
//     res.send(remainingEmployees);
// })
                        // (or)
application.delete('/employees/delete/:id',(req,res)=>{
const remainingEmployees=employees.filter(emp => emp.id !=req.params.id)
//  fileSystem.writeFileSync('./employees.json',JSON.stringify(remainingEmployees));
res.send(remainingEmployees);
})

// function saveChanges(changes){
// fileSystem.writeFileSync('./employees.json',JSON.stringify(changes));  
// }

// function getData(){
//    //read employees json file & convert it to json
//    const jsonData=fileSystem.readFileSync("./employees.json")
//    const employeesDataFromFile=jsonData.toString();
//    const employees=JSON.parse(employeesDataFromFile)
//    return employees;
// }
application.listen(2030)

const express = require("express");
const { getData, save } = require("./helpers");
const application = express();

//add the two line below to tell the express application that it should handle req body
application.use(express.json());
application.use(express.urlencoded({ extended: true }));

//calling getData function toread the employees from the json file
let employees = [];
const getDataPromise = getData();
getDataPromise.then(result => {
  employees = result;
})
.catch(err => {
  console.log("Unable to load employees from JSON");
  return;
})

console.log(employees, 'Employees'); //2nd print statement

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

  })
Savechanges(updatedEmployees);
  res.send(updatedEmployees);
})






application.delete('/employees/delete/:id', (req, res) => {
    const remainingEmployees = employees.filter(emp => emp.id != req.params.id);
    save(remainingEmployees);
    res.send(remainingEmployees);
})

application.listen(8080);

    
}
});
})