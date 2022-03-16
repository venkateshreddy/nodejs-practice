

const { application } = require("../express-config")

const { GetAllFaculities, CreateFaculty, SearchByGender, SearchByBranch,
     UpdateFaculty, DeleteFaculty } = require("./controller")

application.get("/faculty", GetAllFaculities)

application.post("/faculty/create", CreateFaculty);


application.get("/faculty/search-by-gender", SearchByGender);

application.get("/faculty/search-by-branch/:branch", SearchByBranch);

application.put("/faculty/update/:id", UpdateFaculty);

application.delete("/faculty/delete/:id", DeleteFaculty)

