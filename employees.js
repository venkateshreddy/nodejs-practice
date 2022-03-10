const express = require('express');
const {getData,save} = require("./helpers")


const application=express();

//add two lines to tell the express application for handle the body(post method)
application.use(express.json());
application.use(express.urlencoded({ extended:true }));

//calling getData function to read the employees from jsonfile
let employees = [];
 const getDataPromise = getData();
 getDataPromise.then(result =>{  //here getData function will return a promise
  employees = result;
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
