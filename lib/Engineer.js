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
        this.github = github
    }

    getBio() {
        // Name is a Role and
        return `${this.name} is a ${this.role}`
    }

}

const me = new Engineer('James', 23424, 'email', '@JJG1488', 'Engineer');

console.log(me);
console.log(me.getBio())

module.exports = Engineer;