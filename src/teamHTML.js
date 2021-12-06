 

const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')


function generateCards(team) {
  let cards = []
  for(let i = 0; i < team.length; i++) {
    const teamArray = team[i];
    switch(teamArray.getRole()) {
      case 'Manager':
        const manager = new Manager(teamArray.id, teamArray.name, teamArray.email, teamArray.office);
        cards.push(generateManagerCard(manager));
        break;
      case 'Engineer':
        const engineer = new Engineer(teamArray.id, teamArray.name, teamArray.email, teamArray.github);
        cards.push(generateEngineerCard(engineer));
        break;
      case 'Intern':
        const intern = new Intern(teamArray.id, teamArray.name, teamArray.email, teamArray.school);
        cards.push(generateInternCard(intern));
        break;
    }
  }
  return cards.join(``)
}

let generateManagerCard = (Manager) => {
  return `
  <div class="card">
  <div class="card-content">
    <div class="content">
      <h3 class="card-title">${Manager.getName()}</h3>
      <h6 class="card-title">${Manager.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${Manager.getId()}</li>
        <li class="email">Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
        <li class="office">Office Number: ${Manager.getOffice()}</li>
      </div>
  </div>
  </div>
  `
}

let generateEngineerCard = (Engineer) => {
  return `
  <div class="card">
  <div class="card-content">
    <div class="content">
      <h3 class="card-title">${Engineer.getName()}</h3>
      <h6 class="card-title">${Engineer.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${Engineer.getId()}</li>
        <li class="email">Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
        <li class="github">GitHub: https://github.com/${Engineer.getGithub()}</li>
      </ul>
    </div>
  </div>
  `
};

let generateInternCard = (Intern) => {
  return `
  <div class="card">
  <div class="card-content">
    <div class="content">
      <h3 class="card-title">${Intern.getName()}</h3>
      <h6 class="card-title">${Intern.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${Intern.getId()}</li>
        <li class="email">Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
        <li class="school">School: ${Intern.getSchool()}</li>
      </ul>
    </div>
  </div>
  `
}

function generateHTML(teamData) {
  console.log(teamData)
return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Team Profiles</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"> 
</head>

<body>
<header>
<title>My Team</title>
</header>

<section class="hero">
  <div class="hero is-danger">
    <p class="m-4 title">
      My Team
    </p>
    <p class="m-4 subtitle">
      Profiles
    </p>
    <div>
    ${generateCards(teamData)}
    </div>
</section>

</body>
</html>
`;
}


module.exports = generateHTML;