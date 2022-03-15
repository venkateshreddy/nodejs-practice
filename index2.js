// const { query } = require('express');

const express = require('express');

const { getdata,Save } =require("./helpers")

const res = require('express/lib/response');



const application = express();



application.use(express.json());
application.use(express.urlencoded({ extended: true }));


// Calling getdata to read the employees for Json-file
const employees =getdata

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


      return updatedEmployee;
    } else {
      return employee;
    }
  })
Savechanges(updatedEmployees);
  res.send(updatedEmployees);
})





application.listen(3434);