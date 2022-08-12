// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name: "title",
        message: " Enter Project Title",
        required: "true",
        },

    {
        type:"input",
        name: "description",
        message: "What did you build in this project and what problem does it solve?",
        required: "true",
        },

    {
        type:"input",
        name: "installationInstructions",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        required: "true",
        },

    {
        type:"input",
        name: "usageInformation",
        message: "Provide instructions and examples for use. Include screenshots as needed",
        required: "true",
        },

    {
        type: "confirm",
        name: "includeContributers",
        message: "Are others allowed to contribute to your project?",
    },

    {
        type:"input",
        name: "contributing",
        message: "Provide instructions on how others can contribute to the project",
        when: ({includeContributers}) => {
            if (includeContributers){ return true;
            } else {
                return false;
            }
        },
        validate: (contributers) => {
            if (contributers) {
                return true;
            } else { 
                alert ('Please include contributing guidelines!');
                return false;
            }
        }
    },

    {
        type:"input",
        name: "gitHub",
        message: "Enter a link to your GitHub",
        required: "true",
        },

    {
        type:"input",
        name: "email",
        message: "Enter your email address",
        required: "true",
        },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/generated-README.md", fileData, err => {
            if (err){
                reject(err);
                return;
            }

            resolveSoa({
                Ok:true,
                message: "README.md created"
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(readMeData => {
        return readMeData;
    })
};

// Function call to initialize app
init()
.then(readMeData => {
    console.log(readMeData);
    return generateMarkdown(readMeData);
})
.then(readMePage => {
    return writeToFile(readMePage);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
})
.catch(err => {
    console.log(err);
})