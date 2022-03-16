const {application}=require("../express-config") 
const {getAllStudents,createStudents,searchByGender,searchByBranch,
   updateStudents,deleteStudents}=require("./controller")

application.get("/students",getAllStudents)

application.post("/students/create",createStudents)

application.get("/students/search-by-gender",searchByGender)

application.get("/students/search-by-branch",searchByBranch)

application.put("/students/update/:id",updateStudents)

application.delete("/students/delete/:id",deleteStudents)


