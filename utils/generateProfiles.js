const fs = require ('fs');
const path = require('path');

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

generateManager();


// TODO: Create a function to generate markdown for README
// function generateProfiles(promptManager) {
//   return `
  
//   ${manager.name}

// `;
// }



module.exports = { writeFile };