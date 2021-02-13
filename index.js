// This runs the application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Employee = require('./lib/Employee.js');

const questions = [
    {
        type: 'checkbox',
        name: 'checkbox',
        message: 'What is your role?',
        choices: ['Manager', 'Engineer', 'Intern']

    },
    {
        type: 'input',
        name: 'role',

    }
];


function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data)
        // Write data from SELECTED CLASS to the html page
        fs.writeFile('./dist/index.html', getRole(data)).catch((err) => {
            if (err) {
                console.log(err);
            }
            console.log('Your README has been generated');
        })

    })

}

init()