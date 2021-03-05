// New Team Profile index.js
//Import inquirer
const inquirer = require('inquirer');

//Import FS
const fs = require('fs');


const manager = require('./lib/manager');
const Employee = require('./lib/employee');
const intern = require('./lib/intern');
//const generateHTML = require('./generateHTML');
const Engineer = require('./lib/engineer');

const teamProfile = [];
//User Questions to gather info needed to complete README blank inputs
const promptUser = () => {
    inquirer.prompt([
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
        },
    ])

}


const init = () => {
    promptUser().then((answers) => {
        try {
            const html = generateHTML(answers);
            //write HTML
            // generateHTML(Manager.answers);
            // generateHTML(Engineer.answers);
            // generateHTML(Intern.answers);
            generateHTML(teamArray)
            fs.writeFileSync('index.html', html)
            console.log('Successfully wrote to index.html');
        } catch (error) {
            console.log(error);
        }
    });
}


console.log(generateHTML)
init();
generateHTML(teamArray)
generateHTML(Manager)
generateHTML(Engineer)
generateHTML(Intern)









