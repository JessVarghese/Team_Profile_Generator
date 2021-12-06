const inquirer = require('inquirer');
const generatePage = require('./src/team-profile');
// const generateProfiles = require('./utils/generateProfiles');

const fs = require('fs');
const path = require('path');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


const teamData =[];

// TODO: Create an array of questions for the manager inputs

 promptQuestions = () => {

  inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?(required)',
      validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log('please enter your name!');
              return false;
          }
          }
  },
    {
      type: 'input',
      name: 'Id',
      message: 'Please enter your Employee ID:(Required)',
      validate: idInput => {
          if (idInput) {
              return true;
          } else {
              console.log('please enter an ID!');
              return false;
          }
          }
  },
  
  {
    type: 'input',
    name: 'email',
    message: 'What is your Email Address?',
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('please enter your Email Address!');
            return false;
        }
        }
},
{
  type: 'list',
  message: 'what is your role?',
  name: 'role',
  choices: ['Manager', 'Engineer', 'Intern'],
  
},


])
 }
promptQuestions();


const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/team-profile.html', fileContent, err => {
        if (err) {
          reject(err);
  
          return;
        }
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };
  
  // // TODO: Create a function to initialize app
   const init = () => {
     return inquirer.prompt(promptManager)
     .then(teamData => {
       return teamData;
     })
   }
  
  // // Function call to initialize app
  //  init()
  //  .then(teamData => {
  //   return generateProfiles(teamData);
  // })
  // .then(pageHTML => {
  //   return writeFile(pageHTML);
  // })
  // .then(writeFileResponse => {
  //   console.log(writeFileResponse);
    
  // })
  // .catch(err => {
  //   console.log(err);
  // });
  