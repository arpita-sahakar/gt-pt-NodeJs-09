const fs= require('fs'); 
fs.appendFile(
    "log.txt", 
    ", " + process.argv[2],
    (err)=>{
        err? console.error(err): console.log("success");

    });