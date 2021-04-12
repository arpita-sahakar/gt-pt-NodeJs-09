const math = require("./math.js");

let operation = process.argv[2];
let numOne = Number(process.argv[3]);
let numTwo = Number(process.argv[4]);

let result;

switch (operation) {
  case "sum":
    result = math.sum(numOne, numTwo);
    break;
  case "difference":
    result = math.difference(numOne, numTwo);
    break;
  case "product":
    result = math.product(numOne, numTwo);
    break;
  case "quotient":
    result = math.quotient(numOne, numTwo);
    break;
  default:
    console.error("Incorrect input for operation !!!");
    break;
}

console.log("Result is " + result);

// --------------------------------------------------------------
// const math = required('./math.js');