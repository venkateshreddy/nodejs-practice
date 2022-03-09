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
const application = express();
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
