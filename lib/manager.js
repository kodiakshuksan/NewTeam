// //manager object

//Import inquirer
const inquirer = require('inquirer');

//Import FS
const fs = require('fs');


const generateHTML = require('./generateHTML');

const Employee = require('./employee');

const index = require('/index');

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your teams Managers name',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
    },
    {
        type: 'checkbox',
        message: 'Choose next team member.',
        name: 'add',
        choices: ['engineer', 'intern', 'done building my team'],
    }
];

// const generateHTML = require('./generateHTML');
//const questions = require('./index');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getName() {
        return this.name
    }

    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager"
    }
}

//local variables
managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your teams Managers name',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
    },
    {
        type: 'checkbox',
        message: 'Choose next team member.',
        name: 'role',
        choices: ['engineer', 'intern', 'done building my team'],
    }
];

function generateManagerHTML() {
    if (role = Manager) {
        function promptUser() {
            inquirer.prompt(managerQuestions);
        }

    } return {
        function(answer) {
            `<div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${answers.name}</h5 >
                <h6 class="card-subtitle mb-2 text-muted">${answers.role}</h6>
                <p class="card-text">${answers.id}</p>
                <p class="card-text">${answers.officeNumber}</p>
                <a href="#" class="card-link">${answers.email}</a>
                </div >
        `;
        },
    },

        //console.log(Manager)
        //console.log(managerQuestions)



        module.exports = Manager
    module.exports = generateManagerHTML









