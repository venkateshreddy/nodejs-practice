
const{StudentsModule} =require("./model");
const {application} = require("../express-config");
const { type } = require("express/lib/response");

const{
  GetAllStudents,
  CreteStudent,searchbygender,searchbybranch, UpdateStudent, DeleteStudent} =require("./controller")


 
 

 
application.get('/', function (req, res) {
  res.send({ message: "welocome to Student management System" })

})

application.get('/students',GetAllStudents)

application.post('/students/add',CreteStudent)

application.get('/students/search-by-gender',searchbygender)

application.get('/students/search-by-branch/:branch', searchbybranch)


application.put('/students/update/:id' ,UpdateStudent)

application.delete('/students/delete/:id',DeleteStudent)








