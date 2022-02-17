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
