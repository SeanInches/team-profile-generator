const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

function generateEmployees(renderTeam) {
  let renderGroup = [];
  for (let i = 0; i < renderTeam.length; i++) {
    const teammate = renderTeam[i];
    switch (teammate.getRole()) {
      case "Manager":
        const manager = new Manager(
          teammate.name,
          teammate.id,
          teammate.email,
          teammate.officeNumber
        );
        renderGroup.push(renderManager(manager));
        break;
      case "Engineer":
        const engineer = new Engineer(
          teammate.name,
          teammate.id,
          teammate.email,
          teammate.github
        );
        renderGroup.push(renderEngineer(engineer));
        break;
      case "Intern":
        const intern = new Intern(
          teammate.name,
          teammate.id,
          teammate.email,
          teammate.school
        );
        renderGroup.push(renderIntern(intern));
        break;
    }
  }
  return renderGroup.join(``);
}

const renderManager = (Manager) => {
  return `<div class="card h-100">
    <div class="card-body">
        <div class="text-center card-title">
            <h1>${Manager.getRole()}<h1>
                <h5 class="fw-bolder">${Manager.getName()}</h5>
                <li class="list-group-item">ID #: ${Manager.getID()}</li>
                <li class="list-group-item"><a class="list-font" href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
                <li class="list-group-item"><a class="list-font" Office Number: ${Manager.getOfficenumber()}</a></li>
        </div>
    </div>
</div>`;
};

const renderEngineer = (Engineer) => {
  return `<div class="card h-100">
    <div class="card-body">
        <div class="text-center card-title">
            <h1>${Engineer.getRole()}<h1>
                <h5 class="fw-bolder">${Engineer.getName()}</h5>
                <li class="list-group-item">ID #: ${Engineer.getID()}</li>
                <li class="list-group-item"><a class="list-font" href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
                <li class="list-group-item"><a class="list-font" href="${Engineer.getGithub()}">${Engineer.getGithub()}</a></li>
        </div>
    </div>
</div>`;
};

const renderIntern = (Intern) => {
  return `<div class="card h-100">
    <div class="card-body">
        <div class="text-center card-title">
            <h1>${Intern.getRole()}<h1>
                <h5 class="fw-bolder">${Intern.getRole()}</h5>
                <li class="list-group-item">ID #: ${Intern.getID()}</li>
                <li class="list-group-item"><a class="list-font" href="${Intern.getEmail()}">${Intern.getEmail()}</a></li>
                <li class="list-group-item list-font">${Intern.getSchool()}</li>
        </div>
    </div>`;
};
