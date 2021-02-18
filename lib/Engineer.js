// In addition to `Employee`'s properties and methods, 
// `Engineer` will also have the following:
// * `github` GitHub username
// * `getGithub()`
// * `getRole()` overridden to return `'Engineer'`

const Employee = require('../lib/Employee.js')

class Engineer extends Employee {

    constructor(name, id, email, github, role) {

        super(name, id, email)

        this.role = role;

        this.github = github;
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer'
    }

}

// const me = new Engineer('James', 23424, 'email', '@JJG1488', 'Engineer');

// console.log(me);
// console.log(me.getBio())
// console.log(me.getRole());
// console.log(me.getGithub());

module.exports = Engineer;