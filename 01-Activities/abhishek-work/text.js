const fs = require("fs");
fs.appendFile("stuNm&Gd.txt", "Hello world",(err)=>{
    err?console.error(err):console.log("success");
});

const stuDetails = [
    {
        name : "abhi",
        age : 12,
        marks : [1,2,3]
    },

    {
        name : "arpi",
        age : 10,
        marks :[4,5,6]
    }
];

const stuMarksDetails = [
    {
        name: "abhi",
        totalMark: 6
    },
    {
        name: "arpi",
        totalMark: 15
    }
];

const newStMarks = stuDetails.map(obj => {
    let totalMarks = obj.marks.reduce((a,b) => {
        return a + b;
    });

    let newObj = {
        name: obj.name,
        totalMarks: totalMarks
    }

    return {
        name: obj.name,
        totalMarks: obj.marks.reduce((a,b) => a+b)
    }

    return newObj;

});

console.log(newStMarks);

let maxAge = 0;
stuDetails.forEach((character)=>{
    if(character.age>maxAge){
        maxAge=character.age;
    }

});
asserts(maxAge === )

const oldestStuName = stuDetails.reduce(
    (carry, carry1) => carry1.age>carry.age? carry1 : carry
);
console.log(oldestStuName);

const studentMarks = () =>{
    
}

studentMarks();



const array1 = [...stuDetails[0].marks,...stuDetails[1].marks];
    console.log(array1);
    let sumOfNos = array1.reduce((a,b)=>{
        return a + b;
    })
    console.log(sumOfNos);

const studentMarks = (studentArray) =>{
    console.log(studentArray.length);
    // const array1 = [...studentArray[0].marks,...studentArray[1].marks,...studentArray[2].marks];
    const array1 = []; //this array will hold marks for all students
    studentArray.forEach(student =>{
        array1.push(...student.marks);
    })
    console.log(array1);
    let sumOfNos = array1.reduce((a,b)=>{
        return Number(a) + Number(b);
    })
    console.log("sum of marks " + sumOfNos);
}

studentMarks(stuDetails);