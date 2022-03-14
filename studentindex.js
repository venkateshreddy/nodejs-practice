
            const express = require("express");
            const { newData,save } = require("./studentshelper");
            const application = express();
            application.use(express.json());
            application.use(express.urlencoded({ extended: true }));
           
            const students=newData();
            
             application.get("/", function (req, res) {
                res.send({ message: "Welcome to Students Management System" });
            });
            
            application.get("/students", function (req, res) {
                res.send(students);
            
            });
            
            application.get("/students/search-by-name/:name", function (req, res) {
                //http;//<url>?key1=value1&key2=value2
                const filteredStudents = students.filter(stud => stud.name == req.params.name);
                res.send(filteredStudents);
            });
            application.get("/students/search-by-gender/:gender", function (req, res) {
                //http;//<url>/param1
                const filteredStudents = students.filter(stud => stud.gender == req.params.gender);
                res.send(filteredStudents);
            });
            application.get("/students/filter-by-age/:min/:max",function(req,res){
                console.log(req.body);
                const filteredStudents=students.filter((stud)=>(stud.age>=req.params.min)&&(stud.age<=req.params.max));
                res.send(filteredStudents);
            });

            application.post("/students/create", (req, res) => {
                const newStudent = { id: students.length+1, ...req.body };
                students.push(newStudent);//add new student to array
                save(students);
                res.send(students);  //send the whole students array too the client
            });
            
            application.put("/students/update/:studid", (req, res) => {
                //update existing student data
            
                const updatedStudents = students.map((student) => {
                    if (student.id.toString() === req.params.studid) {
                    //update that student
                        const updatedstudent = {
                            ...student,
                            ...req.body
                        };
            
                        return updatedstudent;
                    } else {
                        return student;
                    }
                })
               save(updatedStudents);
                res.send(updatedStudents);
            }) 
            application.delete("/students/delete/:id",(req,res)=>{
                const remainingStudents=students.filter(stud=>stud.id!=req.params.id);
               save(remainingStudents);
                res.send(remainingStudents);
            })
            application.listen(8800);