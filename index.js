// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');

// Create a function that returns a license badge based on which license is passed in
// add a packet that would import generate file
// export "require" fro a file const badmath = require('./badmath');

// if there is no license, return an empty string

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input:",
        name: "apptitle",
        message: "What is the title of your application? (Required)",
    },

    {
        type: "input",
        name: "description",
        message: "Enter a description of your application. (Required)",
    },

    {
        type: "list",
        name: "license",
        message: "What license would you like to use for your application? (Required)",
        choices: ["MIT", "Apache", "GPL", "BSD", "None"],
    },
];

function init() {

// ask the user questions - array
inquirer
  .prompt(questions)
  // need to save the answer to the questions somehow
  .then((answers) => {
    console.log(answers);
     let markdown = generateMarkdown(answers);
     
    // create content from the answers, potentially put them together into one long string (call generateMarkdown function)
    // call writeToFile
  })
  .catch((error) => {
   console.log(error);
  });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
// create the readme file
}

// TODO: Create a function to initialize app
    // Function call to initialize app
init();
