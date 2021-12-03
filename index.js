const inquirer = require('inquirer');
const generatePage = require('./src/team-profiles');
const fs = require('fs');
const Employee = require('./lib/Employee');

const promptManager = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is your name?(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('please enter you name!');
                    return false;
                }
            }
        }

    ])
}


