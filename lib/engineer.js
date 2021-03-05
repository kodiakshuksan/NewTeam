// //engineer object



const questions = require('../generateHTML');

const Employee = require("./employee");

//local variables
const engineerQuestions = [
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
        name: 'username',
        message: 'What is your GitHub username?',

    },

    {
        type: 'checkbox',
        message: 'Choose next team member.',
        name: 'add',
        choices: ['engineer', 'intern', 'done building my team'],
    },
];

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.username = username;
    };
    getName() {
        return this.name
    }

    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }

    getGithub() {
        return this.username;
    }

    getRole() {
        return "Engineer";
    }
}

//How to write all that into HTML


if (Engineer == 'Engineer') {
    //then (ask these questions)  
    const promptUser = () => {
        inquirer.prompt(engineerQuestions)
            .then(response)

        const generateHTML(Engineer) = (answers) =>
            `<div class="card" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">${answers.name}</h5>
<h6 class="card-subtitle mb-2 text-muted">${answers.role}</h6>
<p class="card-text">${answers.id}</p>
<a href="#" class="card-link">${answers.email}</a>
<a href="#" class="card-link">${answers.username}</a>
</div>
 `;
        generateHTML(Intern);
    };
}

// generate HTML function

//     // check box option- done with team[] then prints team[] to html team profile

console.log(Engineer)
console.log(Engineer.id)

module.exports = Engineer
module.exports = generateHTML(Engineer)



// ### GitHub Profile: https://github.com/${answers.userName}