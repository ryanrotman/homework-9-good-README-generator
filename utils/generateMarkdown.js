// function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.title} | ![License Badge](https://img.shields.io/badge/license-${data.license}-green)

    ## Description
    
    ${data.description}
    
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## Installation
    
    ${data.installation}
    
    ## Usage
    
    ${data.usage}
    
    ## License
    
    This project is covered under the ${data.license} license and you can find additional information about that license [here](https://opensource.org/licenses/${data.license}).
    
    ## Contributing
    
    ${data.contributing}
    
    ## Tests
    
    ${data.tests}
    
    ## Questions
    
    For any clarifications or additional questions regarding this project, you can view my [GitHub profile](https://github.com/${data.github}) or contact me by email at ${data.email}.`;
  }
  
  module.exports = generateMarkdown;