let inquirer = require("inquirer");
let fs = require("fs");
let util = require("util");

let writeFileAsync = util.promisify(fs.writeFile);

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
            message: "What is your GitHub username?",
            name: "github",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",
        }
    ]);
};

function generateREADME(answers) {
    return ``
}

promptUser()
    .then(function(answers) {
        let readme = generateREADME(answers);

        return writeFileAsync("README.md", readme);
    })
    .then(function() {
        console.log("Successfully wrote to README.md");
    })
    .catch(function(err) {
        console.log(err);
    });