const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const fs = require("fs");

function buildPage(managers, engineers, interns) {
  let managerCards = "";
  let engineerCards = "";
  let internCards = "";
  let allCards = "";

  managers.forEach((manager) => {
    let card = `<div class="card h-100">
    <div class="card-body">
        <div class="text-center card-title">
            <h1>${manager.name}<h1>
                <h5 class="fw-bolder">Manager</h5>
                <li class="list-group-item">ID #: ${manager.id}</li>
                <li class="list-group-item"><a class="list-font" href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item"><li class="list-font"> Office Number: ${manager.officenumber}</li>
        </div>
    </div>
</div>`;

    managerCards += card;
  });

  engineers.forEach((engineer) => {
    let card = `<div class="card h-100">
    <div class="card-body">
        <div class="text-center card-title">
            <h1>${engineer.name}<h1>
                <h5 class="fw-bolder">Engineer</h5>
                <li class="list-group-item">ID #: ${engineer.id}</li>
                <li class="list-group-item"><a class="list-font" href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item"><a class="list-font" href="${engineer.github}">${engineer.github}</a></li>
        </div>
    </div>
</div>`;

    engineerCards += card;
  });

  interns.forEach((intern) => {
    let card = `<div class="card h-100">
    <div class="card-body">
        <div class="text-center card-title">
            <h1>${intern.name}<h1>
                <h5 class="fw-bolder">Intern</h5>
                <li class="list-group-item">ID #: ${intern.id}</li>
                <li class="list-group-item"><a class="list-font" href="${intern.email}">${intern.email}</a></li>
                <li class="list-group-item list-font">${intern.school}</li>
        </div>
    </div>`;

    internCards += card;
  });

  allCards = managerCards + engineerCards + internCards;

  let html = generateHTML(allCards);

  fs.writeFile("./dist/index.html", html, (err) => {
    if (err) console.log(err);
    if (!err) console.log("Generating Page");
  });
}

function generateHTML(cards) {
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
          ${cards}
          </div>
    </div>
  </section>
</body>
</html>
`;
}

module.exports = buildPage;
