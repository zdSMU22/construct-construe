// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "no license"){
    return "![badge](https://shields.io/badge/license-${license}-brightgreen";
  }else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license'){
    return `[${license}](https://choosealicense.com/license/${license})`;
  }else{
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license'){
    return '## [License](#table-of-contents) ${renderLicenseLink(license)}';
  }else{
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Table-of-Contents

  *[Description](#description)
  *[Installation instructions](#installationInstructions)
  *[Usage Information](#usageInformation)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[License] (#license)
  *[Questions] (#questions)

  ## [Description]
  ${data.description}

  ## [Installation instructions]
  ${data.installationInstructions}

  ## [Usage Information]
  ${data.usageInformation}

  ## [Contributing]
  ${data.contributing}

  ## [Tests]
  ${data.tests}

  ## [License]
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}

  ## [Questions]
  [GitHub] (${data.gitHub})
  Please direct all questions to [Email: ${data.email}](mail to: ${data.email})

`;
}

module.exports = generateMarkdown;
