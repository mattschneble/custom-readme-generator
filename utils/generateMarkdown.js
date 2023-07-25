// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT') {
    return "(https://img.shields.io/badge/License-MIT-yellow.svg)"
  } else if (license === 'Apache') {
    return '(https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  } else if (license === 'GPL') {
    return '(https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else if (license === 'BSD') {
    return '(https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
  } else if (license === 'Eclipse') {
    return '(https://img.shields.io/badge/License-EPL_1.0-red.svg)'
  } else if (license === 'None') {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)'
  } else if (license === 'Apache') {
    return '(https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GPL') {
    return '(https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'BSD') {
    return '(https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === 'Eclipse') {
    return '(https://opensource.org/licenses/EPL-1.0)'
  } else if (license === 'None') {
    return ''
  }
}

// TODO: Create a function that returns the license description of README
// If there is no license, return an empty string
function renderLicenseDescription(license) {
  if(license === 'MIT') {
    return 'This application is covered under the MIT license. Please follow the stated instructions.'
  } else if (license === 'Apache') {
    return 'This application is covered under the Apache license. Please follow the stated instructions.'
  } else if (license === 'GPL') {
    return 'This application is covered under the GPL license. Please follow the stated instructions.'
  } else if (license === 'BSD') {
    return 'This application is covered under the BSD license. Please follow the stated instructions.'
  } else if (license === 'Eclipse') {
    return 'This application is covered under the Eclipse license. Please follow the stated instructions.'
  } else if (license === 'None') {
    return 'This application has no license and is not governed by any instruction except explicity stated by the author.'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.apptitle}
  ![${data.license}]${renderLicenseBadge(data.license)}

  ## Installation
  ${data.installation}

  ## Table of Contents

  * [Description](#description)

  * [Usage](#usageInfo)

  * [Test](#test)

  * [Contributors](#contributors)

  * [License](#license)

  ## Description
  ${data.description}

  ## Usage
  ${data.usageInfo}

  ## Test
  ${data.test}

  ## Contributors
  ${data.helpers}

  ## License
  ${renderLicenseDescription(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contact
  If you have any questions about this application, or suggesstions for improval, please contact me at ${data.email}.
  You can also find me on GitHub at https://github.com/${data.github}.

  Thank you for using this application!
`;

}

module.exports = generateMarkdown;
