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

function buildPage(renderTeam) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
      </head>
    
      <body>
        <header class="bg-secondary py-5">
          <div class="container px-1 px-lg-4 my-1">
            <div class="text-center text-white">
              <h1 class="fw-bolder">Team Profile Generator</h1>
              <p class="">Manage your team</p>
            </div>
          </div>
        </header>
    
        <section class="py-4">
          <div class="py-4">
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 justify-center">
            ${generateEmployees(renderTeam)}
            </div>
      </div>
    </section>
  </body>
</html>
`;
}

module.exports = buildPage;
