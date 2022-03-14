
//  console.log("Start Form the NodeJS");

//  const  one =1;
//  console.log("The given value is","1");

//  const two=2;
//  console.log("The given value is","2");
 
//  const three=3;
//  console.log("The given value is",1+2);

//  console.log("The given value is",1*2*3*4);

//  const four=4;
//  console.log("sum of the given numbers",two+two);

// const five=5;
// console.log("sum of the given numbers",two+three);


// let maxNumber=1000;

// for(i=0;i<=100;i++){

// if(isEven(i)){
//     printline(`${i} is even number`);
// }else{
//     printline(`${i} is odd number`);
// }
// }

// const anthermaxNumber=3000;
// for(i=0;i<=anthermaxNumber;i++){

//     if( isEven(i)){
//         printline(`${i} is even number`);
//     }else{
//         printline(`${i} is odd number`);
//     }
//     }    

// function printline(message){

// console.log(`LOG::${message}`);
// }

// function isEven(number){
    
// if( number % 2==0){
//     return true;
// }else{
//     return false;
// }
// }


 let maxNumber=10;
  for(i=0;i<=maxNumber;i++){
      if(isEven(i)){
          console.log(`${i} this is a even number`)
      }
  else{
console.log(`${i} this is a odd number`)
  }
  }

  const anthermaxNumber=200;
  for(i=0;i<=anthermaxNumber;i++){
      if(isEven(i)){
        printline(`${i} this is a even number`)
      }
  else{
    printline(`${i} this is a odd number`)
  }
}

function isEven(number){
    if(number % 2==0){
        printline(`${i} this is a even number`)
    }
else{
printline(`${i} this is a odd number`)
}
}
 function printline(message){
     console.log(`LOG::${message}`)
 }

// let maxNumber=100;
// for(let i=1; i<=maxNumber; i++){
// if(isEven(i)){
//     printLine(`${i} is even`);
// }
// else{
//    printLine(`${i} is  odd`);
// }
// }
// const anothermaxNumber=110;
// for(let i=1; i<=anothermaxNumber; i++){
//     if(isEven(i)){
//         printLine(`${i} is even`);
//     }
//     else{
//        printLine(`${i} is  odd`);
//     }
// }
// function printLine(message) {
//     console.log(`LOG :: ${message}`)
// }
// function isEven(num){
//     if(num%2==0){
//         return true;
//     }
//     else{
//        return false;
//     }

// }

const express = require("express");
const {getData,save}=require("./helpers");
// const application = express();
//addthe two  line below to tell the express application that it should handle req body

application.use(express.json());
application.use(express.urlencoded({ extended: true }));

//calling getdata functionn to read the engineers from the json files
const engineers=getData();


application.get('/', function (req, res) {
    res.send({ message: "Welcome to Engineers Management System" });
});

application.get('/engineers', function (req, res) {
    res.send(engineers);

})

application.get('/engineers/search-by-qualification', function (req, res) {
    //http;//<url>?key1=value1&key2=value2
    const filteredEngineers = engineers.filter(eng => eng.qualification == req.query.qualification)
    res.send(filteredEngineers);
})
application.get('/engineers/search-by-gender/:gender', function (req, res) {
    //http;//<url>/param1
    const filteredEngineers = engineers.filter(eng => eng.gender == req.params.gender)
    res.send(filteredEngineers);
})
application.get('/engineers/filter-by-designation/:designation', function (req, res) {
    const filteredEngineers = engineers.filter(eng => eng.designation == req.params.designation)
    res.send(filteredEngineers);
});
application.get('/engineers/filter-by-experience/:min/:max', function (req, res) {
    //http;//<url>/param1/param2
    console.log(req.body);
    const filteredEngineers = engineers.filter((eng) => (eng.YOE >= req.params.min) && (eng.YOE <= req.params.max));
    res.send(filteredEngineers);
});
application.post('/engineers/create', (req, res) => {
    const newEngineer = { id: engineers.length + 1, ...req.body };
    engineers.push(newEngineer);//add new engineer to array
    save(engineers);
    res.send(engineers);  //send the whole engineers array too the client
});

application.put('/engineers/update/:empid', (req, res) => {
    //update existing employee data

    const updatedEngineers = engineers.map(engineer => {
        if (engineer.id.toString() === req.params.empid) {

            //update that employee
            const updatedEngineer = {
                ...engineer,
                ...req.body
            };

            return updatedEngineer;
        } else {
            return engineer;
        }
    })
   save(updatedEngineers);
    res.send(updatedEngineers);
})

// application.delete('/engineers/delete/:empid', (req, res) => {
//     //delete the existing employee data

//     const remainingEngineers = engineers.filter(eng => {
//         if (eng.id == req.params.empid) {
//             return false;
//         } else {
//             return true;
//         }
//     })
//     console.log(remainingEngineers);
//     fileSystem.writeFileSync("./engineers.json", JSON.stringify(remainingEngineers));
//     res.send(remainingEngineers);
// })

application.delete('/engineers/delete/:id',(req,res)=>{
    const remainingEngineers=engineers.filter(emp=>emp.id!=req.params.id);
   save(remainingEngineers);
    res.send(remainingEngineers);
})
application.listen(9000);
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


