// Packages for ReadMeGenerator Go Here:
// File System Extra: https://www.npmjs.com/package/fs-extra
const fs = require('fs')
// Inquirer: https://www.npmjs.com/package/inquirer
const inquirer = require('inquirer')
// GenerateMarkdown: 
const GenerateMarkdown = require('generateMarkdown')

// Questions (lightly based off of 01-HTML-Git-CSS/04-Important/Good-README-Guide/README.md)
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
    validate: email => {
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
    validate: title => {
        if (title) {
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
    name: 'confirm subtitle',
    message: 'Subtitle (Optional)',
    default: true
},

{
    type: 'input',
    name: 'subtitle',
    message: 'Subtitle:',
    validate: subtitle => {
        if (subtitleInput) {
            return true;
        }
        else {
            return false;
        }
    }
},

{
    type: 'input',
    name: 'email',
    message: 'Valid email address (Required):',
    validate: email => {
        if (emailInput) {
            return true;
        }
        else {
            console.log('An email address is required!');
            return false;
        }
    }
},


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
