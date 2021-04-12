const inq = require("inquirer");

inq.prompt({
    type : "input",
    message : "enter list of numbers",
    name : "numList"

}).then(answer=>{
    console.log(answer.numList);
    let numArray =answer.numList.split(",");
    console.log(numArray);
    let result = 0;
    for(i=0; i<numArray.length; i++){
        result = result + Number(numArray[i]);
    }
    console.log(result);
})