const inquirer = require('inquirer');
const fs = require('fs');

const readmePrompts = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projTitle',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'projDesc',
      message: 'Enter a description of your project:',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Enter any installation instructions for new users:',
    },
    {
      type: 'input',
      name: 'usageInfo',
      message: 'Enter any usage information:',
    },
    {
      type: 'input',
      name: 'contribGuide',
      message: 'Enter any guidelines for contributors:',
    },
    {
        type: 'input',
        name: 'testInstr',
        message: 'Enter any test instruction:',
      },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email:',
      },
  ]);
};

const readmeGenerator = ({ projTitle, projDesc, install, usageInfo, contribGuide, testInstr, github, email }) =>
  `${projTitle}, ${projDesc}, ${install}, ${usageInfo}, ${contribGuide}, ${testInstr}, ${github}, ${email}`;

const start = () => {
  readmePrompts()
    .then((answers) => fs.writeFileSync('readme.md', readmeGenerator(answers)))
    .then(() => console.log('Check it out, you just generated a readme.md!'))
    .catch((err) => console.error(err));
};

start();