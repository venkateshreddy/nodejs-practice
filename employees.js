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
