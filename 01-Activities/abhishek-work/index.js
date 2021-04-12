const inqur = require("inquirer");

const fs = require("fs");

const studentArray = [];

const getStudentDetails = () => {
  inqur
    .prompt([
      {
        type: "input",
        message: "what is your name",
        name: "yourName",
      },
      {
        type: "input",
        message: "what is your grade",
        name: "yourGrade",
      },

      {
        type: "number",
        message: "what is your age",
        name: "yourAge",
      },

      {
        type: "input",
        message: "what are your marks(comma separated)",
        name: "yourMarks",
      },
    ])
    .then((answer) => {
      let yourName = answer.yourName;
      let yourGrade = answer.yourGrade;
      let yourAge = answer.yourAge;
      let yourMarks = answer.yourMarks;
      console.log(yourName, yourGrade, yourAge, yourMarks);

      let studentDetails = {
        name: yourName,
        age: yourAge,
        grade: yourGrade,
        marks: yourMarks.split(","),
      };

      console.log(studentDetails);
      studentArray.push(studentDetails);
      if (studentArray.length < 3) {
        getStudentDetails();
      } else {
        const oldestStuName = studentArray.reduce((carry, carry1) =>
          carry1.age > carry.age ? carry1 : carry
        );
        console.log("oldest student is " + oldestStuName.name);
        studentMarks(studentArray);
        // wite a function to create an array of strings with name-grade
        // then loop through the new array and write the data in file
        stuDetails(studentArray);
      }
    });
};

getStudentDetails();

const studentMarks = (studentArray) => {
  console.log(studentArray.length);
  // const array1 = [...studentArray[0].marks,...studentArray[1].marks,...studentArray[2].marks];
  const array1 = []; //this array will hold marks for all students
  studentArray.forEach((student) => {
    array1.push(...student.marks);
  });
  console.log(array1);
  let sumOfNos = array1.reduce((a, b) => {
    return Number(a) + Number(b);
  });
  console.log("sum of marks " + sumOfNos);
};

const stuDetails = studentArray =>{
    let stuNameGradeArray = studentArray.map(obj=>{
       let nameGrade = obj.name +"  -  " + obj.grade;
       return nameGrade;
    });
    console.log(stuNameGradeArray);
    fs.writeFile("stuNameNdGrade.txt",stuNameGradeArray,err=>{
        err?console.error(err):console.log("success")
    })

}


