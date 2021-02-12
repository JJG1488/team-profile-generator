// This runs the application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const questions = [
    {
        type: 'checkbox',
        name: 'checkbox',
        message: 'What is your role?',
        choices: ['Manager', 'Engineer', 'Intern']

    }
];


function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data)
        fs.writeFile('./dist/index.html', data => { console.log('Hey.....'); }).catch((err) => {
            if (err) {
                console.log(err);
            }
            console.log('Your README has been generated');
        })

    })

}

init()