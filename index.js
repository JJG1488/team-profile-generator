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
        message: 'What is your role?',
        when: (data) => (data.role) 

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

const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Software Engineering Team</title>
</head>

<body>
    <div class="card-content">
        <h1 class="role"></h1>
        <ul class="card list">
            <li class="name">${data.name}</li>
            <li class="id"></li>
            <li class="email"></li>
            <li></li>

        </ul>
    </div>

</body>

</html>`

init()