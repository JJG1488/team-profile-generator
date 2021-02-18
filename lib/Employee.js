// The first class is an `Employee` parent class 
// with the following properties and methods:
// * `name`
// * `id`
// * `email`
// * `getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`&mdash;returns `'Employee'`

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }

    getRole(){

        return this.role;
    }

}

// const employee1 = new Employee('James', 2434, 'email', 'employee');

// console.log(employee1.getName());
// console.log(employee1.role);

module.exports = Employee;