// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
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
        name: "email",
        message: "What is your email address? (Required)",
    },

    {
        type: "input",
        name: "github",
        message: "What is your GitHub username? (Required)",
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
        choices: ["MIT", "Apache", "GPL", "BSD", "Eclipse", "None"],
    },

    {
        type: "input",
        name: "installation",
        message: "What are the necessary installation instructions for your application? (Required)",
    },

    {
        type: "input",
        name: "usageInfo",
        message: "What are the usage instructions for your application? (Required)",
    },

    {
        type: "input",
        name: "help",
        mesage: "Please list any additional contributors to your application.",
    },

    {
        type: "input",
        name: "test",
        message: "What are the test instructions for your application? (Required)",
    },

];


// TODO: Create a function to initialize app
function initialize() {
    inquirer.prompt(questions)
    .then((answers) => {
        let readME = generateMarkdown(answers);
        writeReadMeFile('./New-README-File/README.md', readME)
    }).catch((error) => {
        console.log(error);
    });
}
// TODO: Create a function to write README file
function writeReadMeFile(fileName, data) {
// create the readme file
fs.writeFile(fileName, data, (error) => {
    if (error) {
        console.log("Your README file could not be created. Please try again.");
    } else {
        console.log("Your README file has been created! Congratulations!");
    }
    })
    }


    // Function call to initialize app
initialize();
