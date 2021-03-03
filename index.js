// New Team Profile index.js

//Import NPM package inquirer
const inquirer = require('inquirer');

//Import FS
const fs = require('fs');

const generateHTML = require('./generateHTML');
//User Questions to gather info needed to complete Team Profile in HTML


const promptUser = () =>
    inquirer.prompt([
        {
            type: 'checkbox',
            message: 'What is your role?',
            name: 'employeeRole3',
            choices: ['manager'],
        },
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is your id?',
        },

        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
        },
        {
            type: 'checkbox',
            message: 'What is your role?',
            name: 'employeeRole1',
            choices: ['engineer', 'intern'],
        },
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is your id?',
        },

        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is GitHub Username?',
        },
        {
            type: 'checkbox',
            message: 'What is your role?',
            name: 'employeeRole2',
            choices: ['engineer', 'intern'],
        },
        {
            type: 'input',
            name: 'internName',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is your id?',
        },

        {
            type: 'input',
            name: 'internEmail',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school do you go to?',
        },
    ])
// .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//         err ? console.log(err) : console.log('Success!')
//     ),
// });




// // TODO: Create a function to write README file
// const generateMarkdown = (answers) =>
//     ` #  ${answers.projectName} 

// ## ${answers.name}

// ## Description-
// ${answers.projectDescription}
// ${renderLicenseBadge(licenseUsed, badge)}
//     ## Table of Contents
// 1. [Installation](#installation)
// 2. [Usage](#usage)
// 3. [Technologies Used](#technologies_used)
// 4. [Credits](#credits)
// 5. [License](#license)
// 6. [Features](#features)
// 7. [Questions and Contributions](#questions_and_contributions)
// 8. [Tests](#tests)

// ##  Installation-

// [Video Demonstration of Application](${answers.projectLink})

// ##  Usage- 

// ![${answers.picText1}](${answers.pic1})
// ![${answers.picText2}](${answers.pic2})


// ## Technologies Used-
// ${answers.technologiesUsed}

// ## Credits-  
// [${answers.creditText1}](${answers.creditLink1})
// [${answers.creditText2}](${answers.creditLink2})

// ## License-
// ### ${answers.licenseUsed}

// ## Features-
// ${answers.feature1}

// ## Questions and Contributions-  
// [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)
// ### GitHub Profile: https://github.com/${answers.userName}
// ### Email: ${answers.email}

// ## Tests-  
// ${answers.test1} `;

const init = () => {
    promptUser().then((answers) => {
        try {
            const html = generateHTML(answers);
            fs.writeFileSync('index.html', html);
            console.log('Successfully wrote to index.html!');
        } catch (error) {
            console.log(error);
        }
    });
};

init();


// const init = () => {
//     promptUser().then((answers) => {
//       try {
//         const html = generateHTML(answers);
//         fs.writeFileSync('index.html', html);
//         console.log('Successfully wrote to index.html');
//       } catch (error) {
//         console.log(error);
//       }
//     });
//   };

//   init();



// 

//  }

// TODO: Create a function to initialize app
///function init() { }

// Function call to initialize app
//init();