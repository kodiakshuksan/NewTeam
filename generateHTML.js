// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//const inquirer = require('inquirer');

//Import FS
const index = require('./index');
const fs = require('fs');
const teamArray = [];
const menu = {
    type: 'checkbox',
    message: 'Choose next team member.',
    name: 'add',
    choices: ['engineer', 'intern', 'done building my team'],
};

//User Questions to gather info needed to complete README blank inputs

const inquirer = require('inquirer');
Engineer = require('./lib/engineer');
const promptUser = () => {
    inquirer
        .prompt([
            {
                type: 'checkbox',
                message: 'Enter info for Manager of team.',
                name: 'role',
                choices: ['Manager'],
            },
            {
                type: 'input',
                name: 'name',
                message: 'what is the teams managers name?',
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
                message: 'What is managers office number?',
            },
            {
                type: 'checkbox',
                message: 'Choose next team member.',
                name: 'role',
                choices: ['Engineer', 'Intern', 'Done building my team'],
            },
            // {
            //     type: 'input',
            //     name: 'name',
            //     message: 'What is your name?',
            // },

            // {
            //     type: 'input',
            //     name: 'id',
            //     message: 'What is your id?',
            // },

            // {
            //     type: 'input',
            //     name: 'school',
            //     message: 'What school do you go to?',
            // },

            // {
            //     type: 'input',
            //     name: 'username',
            //     message: 'What is your GitHub username?',

            // },

            // {
            //     type: 'checkbox',
            //     message: 'Choose next team member.',
            //     name: 'add',
            //     choices: ['engineer', 'intern', 'done building my team'],
            // },
            // {
            //     type: 'input',
            //     name: 'name',
            //     message: 'What is your name?',
            // },
            // {
            //     type: 'input',
            //     name: 'id',
            //     message: 'What is your id?',
            // },
            // {
            //     type: 'input',
            //     name: 'email',
            //     message: 'What is your email?',
            // },

            //     {
            //         type: 'input',
            //         name: 'officeNumber',
            //         message: 'What is your office school?',
            //     },

            //     {
            //         type: 'checkbox',
            //         message: 'Choose next team member.',
            //         name: 'add',
            //         choices: ['engineer', 'intern', 'done building my team'],
            //     },
        ])
        .then(answers => {
            //     // Use user feedback to control further prompts

            if (role == 'Engineer') {
                //then (ask these questions)  
                const promptUser = () => {
                    inquirer.prompt(engineerQuestions)
                        .then(answers => {
                            teamArray.generateHTML(Engineer.answers).push
                            promptUser = () => {
                                inquirer.prompt(menu)
                            // {
                            //     type: 'checkbox',
                            //         message: 'Choose next team member.',
                            //             name: 'role',
                            //                 choices: ['engineer', 'intern', 'done building my team'],
                            //     },
                    
        else if (role == 'Intern') {
                //     //then (ask these questions)  
                const promptUser = () => {
                    inquirer.prompt(internQuestions)
                        .then(answers => {
                            teamArray.generateHTML(Engineer.answers).push
                            promptUser = () => {
                                inquirer.prompt(menu)
                            },
        else (role == 'done building my team') {
                generateHTML(teamArray)
            }
                
        .catch(error) {
        if (error.isTtyError) {
            console.log('error')
        } else {
            console.log('error')
        }
    }


    generateHTML(teamArray) = (data) =>
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
            <div class="container">
                <h1>Team Profile</h1>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    <div class="col">
                        <div class="card" style="width: 18rem;">
                            <div id="generateManagerCard" class="card-body">
                                <h5 class="card-title">${data.name}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${data.role}</h6>
                                <p class="card-text">${data.id}</p>
                                <p class="card-text">${data.officeNumber}</p>
                                <a href="#" class="card-link">${data.email}</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">Column</div>
                    <div class="card" style="width: 18rem;">
                        <div id="generateEngineerCard" class="card-body">
                            <h5 class="card-title">${data.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${data.role}</h6>
                            <p class="card-text">${data.id}</p>
                            <a href="#" class="card-link">${data.username}</a>
                        </div>
                    </div>
                    <div class="col">Column</div>
                    <div class="card" style="width: 18rem;">
                        <div id="generateInternCard" class="card-body">
                            <h5 class="card-title">${data.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${data.role}</h6>
                            <p class="card-text">${data.id}</p>
                            <p class="card-text">${data.school}</p>
                             <a href="#" class="card-link">${data.email}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    </main>
    
    </html>
    
`)


    module.exports = generateHTML;




// function renderLicenseSection(licenseUsed) {

//     if (licenseUsed == 'MIT License') {
//         section = '[License](#license)';
//     }

//     else if (licenseUsed == 'Apache License') {
//         section = '[License](#license)';
//     }
//     else if (licenseUsed == 'ISC License') {
//         section = '[License](#license)';
//     }
//     else {
//         return '[License](#license)';

//         return section;
//     };
