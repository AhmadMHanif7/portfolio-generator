const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [nameA, github] = profileDataArgs;


fs.writeFile('./index.html', generatePage(nameA, github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out the index.html to see the output!')
});