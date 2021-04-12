const inquirer = require("inquirer");
inquirer.prompt([
    {
        type : "number",
        message : "enter first number",
        name : "firstNumber"

    },
    {
        type : "number",
        message : "enter second number",
        name : "secondNumber"

    }
]).then(answer=>{
    let result = answer.firstNumber + answer.secondNumber
    console.log(result);
})
