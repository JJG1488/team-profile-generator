// In addition to `Employee`'s properties and methods, 
// `Manager` will also have the following:
// * `officeNumber`
// * `getRole()`&mdash;overridden to return `'Manager'`

const Employee = require('./Employee.js');

class Manager extends Employee{
    constructor(name, id, email, role, officeNumber){
        super(name, id, email, role)
        this.officeNumber = officeNumber;

    }

    getRole(){
        return `${this.name} is a ${this.role}`;
    }
}

const manager1 = new Manager('James', 484563, 'email', 'Manager', 934847584);

console.log(manager1);
console.log(manager1.getRole());

module.exports = Manager;