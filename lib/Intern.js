// In addition to `Employee`'s properties and methods, 
// `Intern` will also have the following:
// * `school`
// * `getSchool()`
// ****LOOK INTO HOW TO IMPLEMENT***********`getRole() overridden to return `'Intern'`***************

const Employee = require('./Employee.js');
class Intern extends Employee {

    constructor(name, id, email, role, school){
        super(name, id, email, role);
        this.school = school;
    }

    getSchool() {
        return `${this.school}`;
    }

    getRole(){
        return `${this.name} is a ${this.role}`
    }
    
}

const intern1 = new Intern('jamendo', 42385389, 'email', 'intern', 'coding bootcamp');

console.log(intern1.getRole());
console.log(intern1.getSchool());

module.exports = Intern;