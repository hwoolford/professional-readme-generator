// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![MIT License](https://img.shields.io/badge/License-MIT-blue)`;
  } else if (license === "GNU GPLv3") {
    return `![GNU GPLv3 License](https://img.shields.io/badge/License-GNU_GPLv3-blue)`;
  } else if (license === "Mozilla Public License 2.0") {
    return `![Mozilla Public License 2.0](https://img.shields.io/badge/License-Mozilla_Public_License_2.0-blue)`;
  } else if (license === "Apache License 2.0") {
    return `![Apache License 2.0](https://img.shields.io/badge/License-Apache_License_2.0-blue)`;
  } else {
    return "";
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (license !== "None") {
    return "- [License](#license)";
  } else {
    return "";
  }
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== "None") {
    return `
  ## License

  ${license}`;
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
  
${renderLicenseBadge(data.license)}

## Description

${data.description}
  
  
## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ${renderLicenseLink(data.license)}


## Installation
  
${data.install}
  
  
## Usage
  
${data.usage}
  
  
## Contributing
  
${data.contribute}
  
  
## Tests
  
${data.tests}
  
  
## Questions
  
[Find me on GitHub](https://github.com/${data.github}) | [Send me an email](${
    data.email
  })
  
${data.questions}


${renderLicenseSection(data.license)};
`;
}

module.exports = generateMarkdown;
