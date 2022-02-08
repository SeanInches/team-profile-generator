const fs = require('fs')
const inquirer = require('inquirer')
const employee = require('./lib/employee')
const engineer = require('./lib/engineer')
const intern = require('./lib/intern')
const manager = require('/.lib/manager')

const createTeam = [];

const employeeRole = {
    type: 'list',
    name: 'employeeRole',
    message: 'What type of employee would you like to add?',
    choices: ['Manager', 'Engineer', 'Intern']
};

const managerRole = {
    type: 'input',
    name: 'managerName',
    message: 'Managers name?',
    validate: function(answer) {
        if(answer.length > 1) {
            return console.log('Please enter a name.')
        }
        return true;
    },

    type: 'input',
    name: 'managerNumber',
    message: 'What is their office number?',
    validate: function(answer) {
        if(answer.length > 1) {
            return console.log('Please enter an office number.')
        }
        return true;
    },

    type: 'input',
    name: 'managerEmail',
    message: 'What is their email?',
    validate: function(answer) {
        if(answer.length > 1) {
            return console.log('Please enter an email address.')
        }
    },


}