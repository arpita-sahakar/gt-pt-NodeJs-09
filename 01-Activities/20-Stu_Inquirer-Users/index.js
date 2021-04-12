const inquirer = require("inquirer");
inquirer.prompt([
    {
        type : "input",
        name : "yourName",
        message :"what is your name"

    },
]).then(answer =>{
    console.log(answer.yourName);
})

