const inquirer = require('inquirer');
const generateHTML = require('./src/teamHTML');


const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


const teamData =[];

// TODO: Create an array of questions for the manager inputs

 promptManager = () => {

  inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter Team Manager Name:(required)',
      validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log('please enter a name!');
              return false;
          }
          }
  },
  {
    type: 'input',
    name: 'id',
    message: 'Please Enter Team Manager Employee ID:',
  },
  
  {
    type: 'input',
    name: 'email',
    message: 'Please Enter Team Manager Email Address?',
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('please enter an Email Address!');
            return false;
        }
        }
},
  
{
  type: 'list',
  name: 'addMember',
  message: 'What type of team member would you like to add?',
  choices: ['Engineer', 'Intern', 'Finish Generating Team Profiles'],
}
])
.then((managerAnswers) => {

const manager = new Manager(managerAnswers.id, managerAnswers.name, managerAnswers.email, managerAnswers.office)
teamData.push(manager)
switch(managerAnswers.addMember) {
  case 'Engineer':
      engineerQuestions();
      break;
  case 'Intern':
      internQuestions();
      break;
  default: 
  writeToFile('./dist/team-profile.html', generateHTML(teamData))
}
});
};

const engineerQuestions = () => {
inquirer.prompt([
{
  type: 'input',
  name: 'name',
  message: 'What is the engineer\'s name?',
},
{
  type: 'input',
  name: 'id',
  message: 'What is the engineer\'s id?',
},
{
  type: 'input',
  name: 'email',
  message: 'What is the engineer\'s email address?',
},
{
  type: 'input',
  name: 'github',
  message: 'What is the engineer\'s GitHub username?',
},
{
  type: 'list',
  name: 'addMember',
  message: 'What type of team member would you like to add next?',
  choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
}
])
.then((engineerAnswers) => {
const engineer = new Engineer(engineerAnswers.id, engineerAnswers.name, engineerAnswers.email, engineerAnswers.github)
teamData.push(engineer)
switch(engineerAnswers.addMember) {
  case 'Engineer':
      engineerQuestions();
      break;
  case 'Intern':
      internQuestions();
      break;
  default: 
  writeToFile('./dist/team-profile.html', generateHTML(teamData))
}
})
};

const internQuestions = () => {
inquirer.prompt([
{
  type: 'input',
  name: 'name',
  message: 'What is the intern\'s name?'
},
{
  type: 'input',
  name: 'id',
  message: 'What is the intern\'s id?'
},
{
  type: 'input',
  name: 'email',
  message: 'What is the intern\'s email address?'
},
{
  type: 'input',
  name: 'school',
  message: 'What is the intern\'s school?'


},
{
  type: 'list',
  name: 'addMember',
  message: 'What type of team member would you like to add next?',
  choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
}
])
.then((internAnswers) => {
const intern = new Intern(internAnswers.id, internAnswers.name, internAnswers.email, internAnswers.school)
teamData.push(intern)
switch(internAnswers.addMember){
  case 'Engineer':
      engineerQuestions();
      break;
  case 'Intern':
      internQuestions();
      break;
  default:
      writeToFile('./dist/team-profile.html', generateHTML(teamData))
}
})
}

promptManager();


function writeToFile(filename, data) {
fs.writeFile(filename, data, (err) => {
if(err) throw err;
console.log('file saved')
});
};



