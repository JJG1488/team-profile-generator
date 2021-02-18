// In addition to `Employee`'s properties and methods, 
// `Intern` will also have the following:
// * `school`
// * `getSchool()`
// ****LOOK INTO HOW TO IMPLEMENT***********`getRole() overridden to return `'Intern'`***************

const Employee = require('./Employee.js');
class Intern extends Employee {

    constructor(name, id, email, school, role) {

        super(name, id, email, role)

        this.school = school;

    }

    getRole() {
        return 'Intern'
    }

    getSchool() {
        return this.school;
    }

}

// const intern1 = new Intern('jame', 42385389, 'email', 'intern', 'coding boot camp');

// console.log(intern1.getRole());
// console.log(intern1.getSchool());

module.exports = Intern;