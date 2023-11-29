// MIT = ![Static Badge](https://img.shields.io/badge/License-MIT-blue)

// GNU GPLv3 = ![Static Badge](https://img.shields.io/badge/License-GNU_GPLv3-blue)

// Mozilla Public License 2.0 = ![Static Badge](https://img.shields.io/badge/License-Mozilla_Public_License_2.0-blue)

// Apache License 2.0 = ![Static Badge](https://img.shields.io/badge/License-Apache_License_2.0-blue)

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}
  
  
  ## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  ${data.install}
  
  
  ## Usage
  
  ${data.usage}
  
  
  ## License
  
  ${data.license}
  
  
  ## Contributing
  
  ${data.contribute}
  
  
  ## Tests
  
  ${data.tests}
  
  
  ## Questions
  
  [Find me on GitHub](https://github.com/${data.github}) | [Send me an email](${data.email})
  
  ${data.questions}
`;
}

module.exports = generateMarkdown;
