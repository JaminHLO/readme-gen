// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your Project Title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the Description of your Project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the Installation Instructions for this Project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the Usage Information for this Project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the Contributing Guidelines for this Project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the Test Instructions for this Project?',
    },
    {
        type: 'list',
        message: 'Which license would you prefer?',
        name: 'license',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email Address?',
    }
  ];

// TODO: Create a function to write README file
function writeToFile(answers) {

    const {title, description, installation, usage, license, contributing, test, github, email} = answers;

    let badge = '';

    if (license === 'Apache License 2.0'){
        badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'; 
    } else if (license === 'GNU General Public License v3.0') {
        badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'; 
    } else {
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'; 
    }

    //create md file
    const readMeContent = `# ${title}

${badge}

## Description
    
${description}
    
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

This Project is covered by the following license: ${license}.

## Contributing

${contributing}

## Tests

${test}

## Questions

My GitHub username is ${github} and my repository is available here: <https://github.com/${github}/>.
If you have any questions please contact me at <${email}>.`;

    fs.writeFile('README.md', readMeContent, (err) =>
        err ? console.error(err) : console.log('Successfully created README.md file!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        // console.log(answers);
        writeToFile(answers);
    });
}

// Function call to initialize app
init();
