const arya = {
  first: "Arya",
  last: "Stark",
  origin: "Winterfell",
  allegiance: "House Stark"
};

const greeting = `My name is ${arya.first}!
I am loyal to ${arya.allegiance}.`;
const greeting1 = "my name is " + arya.first + "!\n I am loyal to " + arya.allegiance + ".";
console.log(greeting1);

console.log(greeting); // prints
// My name is Arya!
// I am loyal to House Stark.