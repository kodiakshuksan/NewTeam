// //intern object


const Employee = require("./employee");

const questions = require('../generateHTML');


const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
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
        message: 'What is your office school?',
    },

    {
        type: 'checkbox',
        message: 'Choose next team member.',
        name: 'employeeRole',
        choices: ['engineer', 'intern', 'done building my team'],
    },
];

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
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
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
};



//How to write all that into HTML

if (Intern = 'Intern') {
    //     //then (ask these questions)  
    const promptUser = () => {
        inquirer.prompt(questions)

            .then(response)
        const generateHTML(Intern) = (answers) =>
            `<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<title>Document</title>
</head>
<main>
<section>
<div class="card" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">${answers.name}</h5>
<h6 class="card-subtitle mb-2 text-muted">${answers.role}</h6>
<p class="card-text">${answers.id}</p>
<p class="card-text">${answers.school}</p>
<a href="#" class="card-link">${answers.email}</a>
</div>
 `;

    }
};


//     // check box option- done with team[] then prints team[] to html team profile

console.log(Intern)

console.log(Intern.name)
module.exports = Intern
module.exports = generateHTML(Intern)

