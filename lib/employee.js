// //Parent Class Employee


// const questions = require('./generateHTML');
class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(role, name, id, email) {
        this.role = role;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    };
};

console.log(Employee)
console.log(Employee.name)
console.log(Employee.role)

module.exports = Employee















