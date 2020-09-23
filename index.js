let inquirer = require("inquirer");
let fs = require("fs");
let util = require("util");

let writeFileAsync = util.promisify(fs.writeFile);

// FIXME: will need to import the generateMarkdown module

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

// FIXME: add this section to the generateMarkdown.js file and change all sections with 'answers' to 'data'

function generateREADME(answers) {
    return `
# ${answers.title} | ![License Badge](https://img.shields.io/badge/license-${answers.license}-green)

## Description

${answers.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

This project is covered under the ${answers.license} license and you can find additional information about that license [here](https://opensource.org/licenses/${answers.license}).

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Questions

For any clarifications or additional questions regarding this project, you can view my [GitHub profile](https://github.com/${answers.github}) or contact me by email at ${answers.email}.`;
}

// FIXME: take a look at the develop folder and this section and adjust accordingly

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