// In addition to `Employee`'s properties and methods, 
// `Intern` will also have the following:
// * `school`
// * `getSchool()`
// ****LOOK INTO HOW TO IMPLEMENT***********`getRole() overridden to return `'Intern'`***************

const Employee = require('../lib/Employee.js');

class Intern extends Employee {

    constructor(school, role){
        this.school = school;
    }

    super(name, id, email)
    
    getSchool() {
        return this.school;
    }
    
}