const studentMarks = [
  {
    name: "Rajesh",
    subjectWiseMarks: [
      {
        subject: "Maths",
        marks: 78,
      },
      {
        subject: "Physics",
        marks: 80,
      },
      {
        subject: "Chemistry",
        marks: 65,
      },
    ],
  },
  {
    name: "Ramesh",
    subjectWiseMarks: [
      {
        subject: "Maths",
        marks: 90,
      },
      {
        subject: "Physics",
        marks: 67,
      },
      {
        subject: "Chemistry",
        marks: 87,
      },
    ],
  },
  {
    name: "Kiran",
    subjectWiseMarks: [
      {
        subject: "Maths",
        marks: 50,
      },
      {
        subject: "Physics",
        marks: 55,
      },
      {
        subject: "Chemistry",
        marks: 76,
      },
    ],
  },
];

// const studentTotalMarks = studentMarks.map(student => {
//     let totalMarks = 0;
//     student.subjectWiseMarks.forEach(subject => totalMarks = totalMarks + subject.marks);
//     return { studentName: student.name, totalMarks: totalMarks };
// })

// const studentsWithDistinction = studentMarks.map(student => {
//     let totalMarks = 0;
//     student.subjectWiseMarks.forEach(subject => totalMarks = totalMarks + subject.marks);
//     return { studentName: student.name, totalMarks: totalMarks };
// }).filter(studentData => {
//     if (studentData.totalMarks >= 240) {
//         return true;
//     } else {
//         return false;
//     }
// })

const studentsWithDistinction = studentMarks.map(student => {
    let totalMarks = 0;
    const studentName = student.name;
    
    student.subjectWiseMarks.forEach(subject => totalMarks = totalMarks + subject.marks);
    
    return { studentName, totalMarks }; // { studentName: studentName, totalMarks: totalMarks }
})
.filter(studentData => studentData.totalMarks >= 220)

//console.log(studentsWithDistinction, 'studentsWithDistinction')


const student = {
    name: "Rajesh",
    address: {
        city: "krmr",
        state: "TS"
    }
}
delete student.address.city;
console.log(student)