const employees = [
  {
    name: "Sai Krishna",
    qualification: "BTech",
    designation: "Software Engineer",
    gender: "Male",
    YOE: 3
  },
  {
    name: "Vinay",
    qualification: "MTech",
    designation: "Web Developer",
    gender: "Male",
    YOE: 4
  },
  {
    name: "Sharas Chandra",
    qualification: "MTech",
    designation: "Web Developer",
    gender: "Male",
    YOE: 4
  },
  {
    name: "Udaya Sri",
    qualification: "MCA",
    designation: "UI Designer",
    gender: "Female",
    YOE: 2
  },
  {
    name: "Naveena",
    qualification: "MSc",
    designation: "Project Manager",
    gender: "Female",
    YOE: 8
  },
];

//findout one employee with designation Project manager
const projectManager = employees.find((emp) => {
  if (emp.designation == "Project Manager") {
    return true;
  } else {
    return false;
  }
});
console.log(projectManager, 'projectManager')

//find all employees with designation web developer
const webDevelopers = employees.filter((emp) => {
    if (emp.designation == "Web Developer") {
      return true;
    } else {
      return false;
    }
});
console.log(webDevelopers, 'webDevelopers')


//calculate the seniority level based on years of experience
const employeesSeniority = employees.map(emp => {
    if (emp.YOE < 3) {
        emp.seniority = "Junior"
    } else if (emp.YOE >=3 && emp.YOE < 5) {
        emp.seniority = "Intermediate"
    } else if (emp.YOE > 5) {
        emp.seniority = "Senior"
    }
    return emp;
});
console.log(employeesSeniority, 'employeesSeniority')