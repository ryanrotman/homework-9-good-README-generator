// Importing needed modules for this project
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// Making the writeFile module able to be used in a promise
const writeFileAsync = util.promisify(fs.writeFile);

// Function to prompt the user and gather requested information for the README
function promptUser() {
    return inquirer.prompt([
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
            message: "What are the installation instructions?",
            name: "installation",
        },
        {
            type: "input",
            message: "What is the usage of this app?",
            name: "usage",
        },
        {
            type: "list",
            message: "Select what license is being used?",
            name: "license",
            choices: [
                "Apache-2.0",
                "BSD-3-Clause",
                "BSD-2-Clause",
                "GPL-License",
                "LGPL-License",
                "MIT",
                "MPL-2.0",
                "CDDL-1.0",
                "EPL-2.0"
            ]
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
            message: "Enter your GitHub username?",
            name: "github",
        },
        {
            type: "input",
            message: "Enter your email address?",
            name: "email",
        }
    ]);
};

// Initialize the program
promptUser()
    .then(function(data) {
        let readme = generateMarkdown(data);
        // Writing the README to a new folder in the project
        return writeFileAsync("./README_Output/README.md", readme);
    })
    .then(function() {
        console.log("Successfully wrote to README.md");
    })
    .catch(function(err) {
        console.log(err);
    });