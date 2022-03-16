const { application } = require("../express-config");

const {
  getAllStudents,
  createStudent,
  searchByGender,
  searchByBranch,
  updateStudent,
  deleteStudent,
} = require("./controller");

application.get("/students", getAllStudents);

application.post("/students/create", createStudent);

application.get("/students/search-by-gender", searchByGender);

application.get("/students/search-by-branch/:branch", searchByBranch);

application.put("/students/update/:id", updateStudent);

application.delete("/students/delete/:id", deleteStudent);
