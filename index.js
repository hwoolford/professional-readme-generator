
const { writeFile } = require('fs').promises;
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Prompts to build README generator
const questions = () => {
    return inquirer.prompt([ 
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
    choices: [
      "MIT",
      "GNU GPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "None",
    ],
  },
  {
    type: "input",
    message: "What are the guidelines for contributing to your project?",
    name: "contribute",
  },
  {
    type: "input",
    message:
      "Describe the tests you have run and provide examples on how to run them.",
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
]);
};

// Initializes program by presenting the prompts and then writing the answers to the generated README.md file
const init = () => {
    questions()
    .then((answers) => writeFile('./generated-readme/README.md', generateMarkdown(answers)))
    .then(() => console.log("Your README has been generated"))
    .catch((err) => console.log(err));
};

// Function call to initialize app
init();
