// Packages for ReadMeGenerator Go Here:
// File System Extra: https://www.npmjs.com/package/fs-extra

const fs = require('fs')

// Inquirer: https://www.npmjs.com/package/inquirer

const inquirer = require('inquirer')

// GenerateMarkdown: 

const GenerateMarkdown = require('generateMarkdown')

// Questions: (Based off of 01-HTML-Git-CSS/04-Important/Good-README-Guide/README.md and https://meakaakka.medium.com/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3)

const questions = [{
    type: 'input',
    name: 'creatorName',
    message: 'Name of the person, group, business, or company creating this README.md file (Required):',
    validate: nameInput => {
        if (nameInput) {
            return true;
        }
        else {
            console.log('A name is required!');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'githubUsername',
    message: 'GitHub Username of the account in which this repository is created (Required):',
    validate: githubUsernameInput => {
        if (githubUsernameInput) {
            return true;
        }
        else {
            console.log('A GitHub Username is required!');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'email',
    message: 'Valid email address (Required):',
    validate: emailInput => {
        if (emailInput) {
            return true;
        }
        else {
            console.log('An email address is required!');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'title',
    message: 'Title of the Project (Required):',
    validate: titleInput => {
        if (titleInput) {
            return true;
        }
        else {
            console.log('A title is required!');
            return false;
        }
    }
},

// For inputs that are not required, use inquirer's 'confirm'

{
    type: 'confirm',
    name: 'confirmSubtitle',
    message: 'Would you like to add a Subtitle? (Optional):',
    default: true
},

{
    type: 'input',
    name: 'subtitle',
    message: 'Subtitle:',
    when: ({
        confirmSubtitle
    }) => {
        if (confirmSubtitle) {
            return true;
        } else {
            return false;
        }
    }
},

{
    type: 'confirm',
    name: 'confirmMotivation',
    message: 'Would you like to add what motivated you to create this project? (Optional):',
    default: true
},

{
    type: 'input',
    name: 'motivation',
    message: 'Please explain what motivated you to create this project:',
    when: ({
        confirmMotivation
    }) => {
        if (confirmMotivation) {
            return true;
        } else {
            return false;
        }
    }
},

{
    type: 'input',
    name: 'description',
    message: 'Please provide a detailed description of this project. (Required):',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        }
        else {
            console.log('Project description is required!');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for this project. (Required):',
    validate: installationInput => {
        if (installationInput) {
            return true;
        }
        else {
            console.log('Installation instructions are required!');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions for product usage (Required):',
    validate: usageInput => {
        if (usageInput) {
            return true;
        }
        else {
            console.log('Instructions for product usage are required!');
            return false;
        }
    }
},

{
    type: 'confirm',
    name: 'confirmFeatures',
    message: 'Would you like to add a "Project Features" section? (Optional):',
    default: true
},

{
    type: 'input',
    name: 'features',
    message: 'Please describe the features of this project:',
    when: ({
        confirmFeatures
    }) => {
        if (confirmFeatures) {
            return true;
        } else {
            return false;
        }
    }
},

{
    type: 'confirm',
    name: 'confirmProduction',
    message: 'Would you like to include a "Production" section that will contain the deployed project? (Optional):',
    default: true
},

{
    type: 'input',
    name: 'production',
    message: 'Please provide the project repository name from GitHub:',
    when: ({
        confirmProduction
    }) => {
        if (confirmProduction) {
            return true;
        } else {
            return false;
        }
    }
},

{
    type: 'confirm',
    name: 'confirmTests',
    message: 'Would you like to add a section that describes and shows how to run tests with code examples?',
    default: true
},

{
    type: 'input',
    name: 'tests',
    message: 'Please include descriptions and/or code examples of how to run tests for this project:',
    when: ({
        confirmTests
    }) => {
        if (confirmTests) {
            return true;
        } else {
            return false;
        }
    }
},

{
    type: 'confirm',
    name: 'confirmLicense',
    message: 'Would you like to include a "License" section?',
    default: true
},

{
    type: 'list',
    name: 'license',
    message: 'Which of the following badges would you like to include?',
    choices: [
        'Apache', 'Boost', 'BSD', 'Eclipse', 'GNU', 'IBM', 'ISC', 'MIT', 'Perl'
    ],
    when: ({
        confirmLicense
    }) => {
        if (confirmLicense) {
            return true;
        } else {
            return false;
        }
    }
},

{
    type: 'confirm',
    name: 'confirmScreenshot',
    message: 'Would you like to include a screenshot of your finished project? (Optional):',
    default: true
},

{
    type: 'input',
    name: 'screenshot',
    message: 'Please include the relative path to the screenshot of your finished project:',
    when: ({
        confirmScreenshot
    }) => {
        if (confirmScreenshot) {
            return true;
        } else {
            return false;
        }
    }
},





// TODO: Create a function to write README file
function writeToFile(fileName, data) { },

// TODO: Create a function to initialize app
function init() { },

// Function call to initialize app
init();
