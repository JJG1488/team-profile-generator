const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

// creating employees array to put employees into
const employees = []

// starts application
function init() {
    // renders HTML
    generateHTML()
    // prompt quesitons
    addTeamMember()

}

// ===================================================================

function addTeamMember() {
    // starts questions
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your team members name?'

        },
        {
            type: 'list',
            name: 'role',
            message: 'What is your team members role?',
            choices: ['Manager', 'Engineer', 'Intern']

        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your team members id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your team members email address?'
        }])

        .then(function ({ name, role, id, email }) {

            let roleInfo = '';

            if (role === 'Engineer') {

                roleInfo = 'GitHub username';

            } else if (role === 'Intern') {

                roleInfo = 'school name';

            } else {

                roleInfo = 'office phone number'

            }

            inquirer.prompt([{

                type: 'input',
                name: 'roleInfo',
                message: `Enter team members ${roleInfo}`,
            },

            {
                type: 'list',
                name: 'moreMembers',
                message: 'Would you like to add more team members?',
                choices: ['yes', 'no'],

            }])

                .then(function ({ roleInfo, moreMembers }) {

                    let newMember;

                    if (role === 'Engineer') {

                        newMember = new Engineer(name, id, email, roleInfo);

                    } else if (role === 'Intern') {

                        newMember = new Intern(name, id, email, roleInfo);

                    } else {

                        newMember = new Manager(name, id, email, roleInfo);

                    }

                    employees.push(newMember);

                    createNewMember(newMember)

                        .then(function () {

                            if (moreMembers === 'yes') {

                                addTeamMember();

                            } else {

                                ClosingHtmlTags();

                            }

                        });

                });

        });

}

// ===================================================================

function generateHTML() {
    // sets html to a const called html
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;

    // asynchronously writing data to the index.html file, replacing it if it already exists
    fs.writeFile('./dist/index.html', html, function (err) {

        if (err) {

            console.log(err);

        }

    });

}

// ===================================================================

function createNewMember(newMember) {

    return new Promise(function (resolve, reject) {

        let name = newMember.getName();

        let role = newMember.getRole();

        let id = newMember.getId();

        let email = newMember.getEmail();

        let data = "";

        if (role === "Engineer") {

            const gitHub = newMember.getGithub();

            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;

        } else if (role === "Manager") {

            const officeNumber = newMember.getOfficeNumber();

            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officeNumber}</li>
            </ul>
            </div>
        </div>`

        } else {

            const school = newMember.getSchool();

            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`

        }

        console.log("adding team member");
        // asynchronously appending this file, creating it if it doesn't exist
        fs.appendFile("./dist/index.html", data, function (err) {

            if (err) {

                return reject(err);

            };

            return resolve();

        });

    });

}

// ===================================================================

function ClosingHtmlTags() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

// asynchronously appending this file, creating it if it doesn't exist
    fs.appendFile("./dist/index.html", html, function (err) {

        if (err) {

            console.log(err);

        };

    });

    console.log("end");
}

// ===================================================================

init()


