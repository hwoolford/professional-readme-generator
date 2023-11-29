// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Provide a description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "Describe the necessary steps to install your project.",
    name: "install",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use.",
    name: "usage",
  },
  {
    type: "list",
    message: "Please choose a license below.",
    name: "license",
    choices: ['MIT', 'ISC', 'GNU GPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'The Unlicense'],
  },
  {
    type: "input",
    message: "What are the guidelines for contributing to your project?",
    name: "contribute",
  },
  {
    type: "input",
    message: "Describe the tests you have run and provide examples on how to run them.",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your gitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "How can someone reach out to you with questions?",
    name: "questions",
  },
];

inquirer.prompt(questions)
// TODO: Create a function to write README file
.then((data) => {
const fileName = `${data.title.toTitleCase().split(" ").join("-")}.md`;
const mdDoc = `
# ${title}

## Description

${description}


## Table of Contents


## Installation

${install}


## Usage

${usage}


## License

${license}


## Contributing

${contribute}


## Tests

${tests}


## Questions

[Find me on GitHub](https://github.com/${github})
[Send me an email](${email})

${questions}
`

fs.writeFile(fileName, mdDoc, (err) =>
err ? console.log(err) : console.log("Success!")
)
// function writeToFile(fileName, data) {}
});
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
