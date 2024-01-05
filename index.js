const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');
const { argv } = require('process');



charsValidate = (input) => {
    if(input.length <= 3) {return true}
    else {return false}
    console.log("Please enter maximum of 3 characters");
}
    fs
    chalk
    inquirer


.prompt([
    {
        name: 'text',
        message: 'Please enter up to 3 characters of text:',
        validate: charsValidate,    
    },  
    {
        name: 'colour',
        type: 'checkbox',
        choices: [''],
        message: 'What colour would you prefer?',
    },
    {
        name: 'shape',
        type: 'checkbox',
        choices: ['Square','circle', 'triangle'],
        message: 'What shape would you prefer?',
    },
    
])

.then(answers => { //assigns variables to each answer that is prompted
    
    text = answers.text;
    colour = answers.colour;
    shape = answers.shape;

    //below creates an array with all answers so it can be displayed in the new file
    const questions = [text, colour, shape];
    //below uses JSON to turn the array from [2] into a string
    const jsonStringData = JSON.stringify(questions, null, 2);
    
    //writes the svg file
    fs.writeFileSync('./logo.svg', jsonStringData), (err) =>
    err ? console.error(err) : console.log('Success!') //logs any errors
    
    console.log('Answers:', answers);
});