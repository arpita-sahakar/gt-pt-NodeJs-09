const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username",
    },

    {
      type: "input",
      message: "Where are you located?",
      name: "location",
    },

    {
      type: "input",
      message: "What is your bio?",
      name: "bio",
    },

    {
      type: "input",
      message: "What is your LinkedIn URL?",
      name: "linekdinURL",
    },

    {
      type: "input",
      message: "What is your github URL?",
      name: "githubUrl",
    },
  ])
  .then((response) => {
    // console.log(response.username);
    const htmlContent = `<!DOCTYPE html>

    <html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Project-2</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="" />
      </head>
      <body>
       
     <h1>${response.username} </h1> 
     <h1>${response.location}</h1>
     <h1>${response.bio}</h1>
    <h1>${response.linekdinURL}</h1>
    <h1>${response.githubUrl}</h1>

    
    
    
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
          crossorigin="anonymous"
        ></script>
        <script src="" async defer></script>
      </body>
    </html>
    `;

    fs.writeFile("test.html", htmlContent, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });

