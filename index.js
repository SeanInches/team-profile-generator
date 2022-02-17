const fs = require("fs");
const inquirer = require("inquirer");
const employee = require("./lib/employee");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");
const teamgen = require("./src/teamgen");

const createTeam = [];

const employeeRole = {
  type: "list",
  name: "employeeRole",
  message: "What type of employee would you like to add?",
  choices: ["Manager", "Engineer", "Intern"],
};

const managerRole = [
  {
    type: "input",
    name: "managerName",
    message: "Managers name?",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter a name.");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "managerID",
    message: "What is the managers ID?",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter an ID");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "managerNumber",
    message: "What is their office number?",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter an office number.");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is their email?",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter an email address.");
      }
      return true;
    },
  },
];

const engineerRole = [
  {
    type: "input",
    name: "engineerName",
    message: "What is the engineers name?",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter a name");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "engineerID",
    message: "What is the engineers ID?",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter an ID");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is the engineers email?",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter an email");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "engineerGithub",
    message: "What is the engineers github?",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter a github name");
      }
      return true;
    },
  },
];

const internRole = [
  {
    type: "input",
    name: "internName",
    message: "What is the interns name?",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter a name");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "internID",
    message: "What is the interns ID?",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter an ID");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "internEmail",
    message: "What is the interns email?",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter an ID");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "internSchool",
    message: "What school is the intern in?",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter a school");
      }
      return true;
    },
  },
];

const managers = [];
const engineers = [];
const interns = [];

function addEmployee() {
  inquirer
    .prompt(employeeRole)
    .then((response) => {
      init(response.employeeRole);
      return;
    })

    .catch((error) => {
      console.log(error);
      return;
    });
}

function init(response) {
  if (response === "Manager") {
    inquirer
      .prompt(managerRole)
      .then((response) => {
        const updateManager = new manager(
          response.managerName,
          response.managerID,
          response.managerEmail,
          response.managerNumber
        );
        managers.push(updateManager);
        addNextemployee();
        return;
      })

      .catch((error) => {
        console.log(error);
        return;
      });
  }

  if (response === "Engineer") {
    inquirer
      .prompt(engineerRole)

      .then((response) => {
        const updateEngineer = new engineer(
          response.engineerName,
          response.engineerID,
          response.engineerEmail,
          response.engineerGithub
        );
        engineers.push(updateEngineer);
        addNextemployee();
        return;
      })

      .catch((error) => {
        console.log(error);
        return;
      });
  }
  if (response === "Intern") {
    inquirer
      .prompt(internRole)

      .then((response) => {
        const updateIntern = new intern(
          response.internName,
          response.internID,
          response.internEmail,
          response.internSchool
        );
        interns.push(updateIntern);
        addNextemployee();
        return;
      })

      .catch((error) => {
        console.log(error);
        return;
      });
  }
}

function addNextemployee() {
  inquirer
    .prompt({
      type: "list",
      name: "addNew",
      message: "Do you want to add another employee?",
      choices: ["Yes", "No"],
    })

    .then((response) => {
      if (response.addNew === "Yes") {
        addEmployee();
      }
      if (response.addNew === "No") {
        teamgen(managers, engineers, interns);
      }
    });
}

addEmployee();
