// Dependencies 
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


// Array of questions to generate README
const questions = [
    
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please submit a description of your project",
        name: "description"
    },
    {
        type: "input",
        message: "Are there any installation instructions for your project?",
        name: "installation"   
    },
    {
        type: "input",
        message: "What is your project used for?",
        name: "usage"
    },
    {
        type: "list",
        message: "Does your project use any licenses?",
        choices: ["MIT", "Apache 2.0", "Boost 1.0", "BSD 3-Clause", "BSD 2-Clause", "None"],
        name: "license"
    },
    {
        type: "input",
        message: "Submit your GitHub Username",
        name: "github"
    },
    {
        type: "input",
        message: "Submit your email",
        name: "email"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be used to run tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors of this repo?",
    }

];


// Function to write README
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((inquirerAnswers) => {
            console.log("Generating...");
            writeToFile("./distribution/README.md", generateMarkdown({ ...inquirerAnswers }));
        })
}

// Function call to initialize app
init();
