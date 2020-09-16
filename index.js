let inquirer = require("inquirer");
let fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description",
    },
    {
        type: "input",
        message: "What is the table of contents?",
        name: "tableOfContents",
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "installation",
    },
    {
        type: "input",
        message: "What is the usage of this app?",
        name: "usage",
    },
    {
        type: "input",
        message: "What license(s) are being used?",
        name: "license",
    },
    {
        type: "input",
        message: "Who is contributing to this project?",
        name: "contributing",
    },
    {
        type: "input",
        message: "How is this project tested?",
        name: "tests",
    },
    {
        type: "input",
        message: "Any questions?",
        name: "questions",
    }
]).then(function(response) {
    console.log(response); // This is for testing purposes. Will replace with writefile.
});