const express = require("express");

 const {getData, save} = require("./facultyhelpers")

const application = express();

application.use(express.json());
application.use(express.urlencoded({ extended: true }));

let faculty = [];
const getDatapromise= getData();
getDatapromise.then(facultydata =>{
    faculty = facultydata
    //  console.log(facultydata,'Data');
}).catch(err =>{
     console.log("Unable to load from json");
})

console.log(faculty, 'Faculty');

faculty= [];

application.get("/", function (req, res) {
    res.send({ "message": " Welcome To Faculty management" });
})

application.get("/faculty",  (req, res)=> {
    res.send(faculty)
})

application.get("/faculty/search-by-Designation", function (req, res) {
    const filteredwithdesignation = faculty.filter(facultyy => facultyy.Designation == req.query.Designation)
    res.send(filteredwithdesignation)
    
})


application.get("/faculty/search-by-Department",  (req, res)=> {
    const filteredwithdepartment = faculty.filter(facultyy => facultyy.Department == req.query.Department)
    res.send(filteredwithdepartment)
})


application.get("/faculty/search-by-Gender/:Gender",  (req, res) =>{
    const filteredwithgender = faculty.filter(facultyy => facultyy.Gender == req.params.Gender)
    res.send(filteredwithgender)
})


application.get("/faculty/search-by-experience/:min/:max", function (req, res) {
    const filteredwithexperience = faculty.filter(facultyy => facultyy.YOE >= req.params.min && facultyy.YOE <= req.params.max)
    res.send(filteredwithexperience)
})



application.post("/faculty/create", (req, res) => {
    const newfaculty = { id: faculty.length + 1, ...req.body };
    faculty.push(newfaculty);
    save(faculty)
    res.send(faculty);
});

application.put("/faculty/update/:facid", (req, res) => {
    const updatedfaculty = faculty.map((facultyy) => {
        console.log(req.params.facid, 'checking here');
        if (facultyy.id.toString() === req.params.facid) {
            console.log("inside");
            const updatefaculty = {
                ...facultyy,
                ...req.body   //simply by using this we can update all 
            }
            return updatefaculty;
        } else {
            return facultyy;
        }
    })
   save(updatedfaculty)
    res.send(updatedfaculty)
});

application.delete("/faculty/delete/:id", (req, res) => {
    const remainingFaculty = faculty.filter(facultyy => facultyy.id != req.params.id)

    save(remainingFaculty)
    res.send(remainingFaculty)
});



application.listen(8080)
