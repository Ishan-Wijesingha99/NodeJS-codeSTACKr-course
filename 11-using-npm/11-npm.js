
// npm means node package manager

// a dependency, a module, a package, basically refers to the same thing. They can be used interchangeably.



// terminal commands

// npm --version or npm --v
// this gives your current version of npm



// package.json
// as we know, json is basically an object
// so, package.json is just an object that describes a certain package/module/dependency
// it will have properties for the version, the name of the package, github repo link etc



// first, use npm init to create package.json file, you will be prompted in the terminal to fill in properties of the json object
// use npm init -y for all the properties to be their default



// once we're done initialising the package.json file, we can now install the specific package we want
// npm i packageName
// this downloads a package/dependency/module for JUST ONE PARTICULAR FOLDER

// npm install -g packageName
// this downloads the package as a global dependency, use it in any project/folder



// using the inquirer module after we've initialised the package.json file and run the command npm i inquirer
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'firstName'
    },
    {
        type: 'input',
        message: 'What is your location?',
        name: 'location'
    },
    {
        type: 'input',
        message: 'Tell us a little bit about yourself?',
        name: 'bio'
    },
]).then(function(answers) {
    // log answers object
    console.log(answers);
})






