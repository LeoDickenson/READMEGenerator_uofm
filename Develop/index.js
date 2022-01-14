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
      {
        type: 'input',
        name: 'license',
        message: 'please enter the type of license you are using for your application: ',
      },
  ]);
};

const readmeGenerator = ({ projTitle, projDesc, install, usageInfo, contribGuide, testInstr, github, email, license }) =>
  `# ${projTitle}
   ## Description
   ${projDesc}
   # Table of contents
1. [Installation Instructions](#installation)
2. [Usage Instructions](#usage)
3. [Contribution Guidelines](#contribution)
4. [Testing Information](#testing)
5. [Questions/Contact Info](#questions)
6. [Licensing](#license)

   ### <a name="installation"></a> Installation Instructions
    ${install}
   ### <a name="usage"></a> Usage Instructions
    ${usageInfo} 
   ### <a name="contribution"></a> Contribution Guidelines
    ${contribGuide} 
   ### <a name="testing"></a> Testing Information
    ${testInstr} 
   ### <a name="questions"></a> Questions/Contact Info
    <strong>GitHub:</strong> ${github}
    <br></br>
    <strong>Email:</strong> ${email}
   ### License
    ${license}`

const start = () => {
  readmePrompts()
    .then((answers) => fs.writeFileSync('readme.md', readmeGenerator(answers)))
    .then(() => console.log('Check it out, you just generated a readme.md!'))
    .catch((err) => console.error(err));
};

start();