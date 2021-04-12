const stuDetails = [
  {
    name: "abhi",
    age: 12,
    marks: [1, 2, 3],
  },

  {
    name: "arpi",
    age: 100,
    marks: [4, 5, 6],
  },
  {
    name: "tia",
    age: 1000,
    marks: [4, 5, 6],
  },
  {
    name: "Ma",
    age: 1,
    marks: [4, 5, 6],
  },
];
//console.log all from given array where names starts with A
// console.log all from given array where age is greater than 10

const nameStartWithA = stuDetails.filter(obj=>{
    return obj.name.startsWith("a");
    
});
const nameStartWithA1 = stuDetails
    .filter(obj=> obj.name.startsWith("a"))
    .map(obj=> obj.name);
console.log(nameStartWithA );
console.log("only name " + nameStartWithA1 );

const ageGreaterThan10 = stuDetails.filter(obj=> obj.age>10);
console.log(ageGreaterThan10);

const ageGreaterThanTen = stuDetails.filter(obj=> obj.age>10).map(obj=>obj.name);

 console.log("only the name" + ageGreaterThanTen);
    
