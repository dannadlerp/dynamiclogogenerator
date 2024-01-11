import inquirer from "inquirer";
import fs from "fs";
//import chalk from "chalk";
import { argv } from "process";
import jest from "jest";

//defining different shape classes
class Triangle {
    constructor() {
        this.colour = "black";
        const ShapeCode = `<polygon points="${coordinates}" fill="${this.colour}" />`;
    }

    setColor(colour) {
        this.colour = colour;   
    }

    render() {
        const coordinates = "150,18 244,182 56,182"; //coordinates of triangle
    return ShapeCode;
    }
};


class Square {
    constructor(shapeName, sides)   {
        this.shapeName = shapeName;
        this.sides = sides;
        const ShapeCode = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="30" height="30" stroke="${txtColour}" fill="${shapeColour}" stroke-width="5"/>
        <text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="60" text-anchor="middle" fill="${textColour}">${text}</text>
        `
        }
        render() {
            const coordinates = "150,18 244,182 56,182"; //coordinates of triangle
        return  `<polygon points="${coordinates}" fill="${this.colour}" />`;
        }
    };

class Circle {
    cconstructor() {
        this.colour = "black";
        let ShapeCode = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="100" r="80" fill="${shapeColour}"/>
        <text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="60" text-anchor="middle" fill="${textColour}">${text}</text>
</svg>`;
    }
    
    render() {
        const coordinates = "150,18 244,182 56,182"; //coordinates of triangle
    return  `<polygon points="${coordinates}" fill="${this.colour}" />`;
    }
};

const init = () => {

const fileName = logo.svg;
function charsValidate(input) {
    if(input.length <= 3) {return true}
    else {return false}
    console.log("Please enter maximum of 3 characters");
}

    fs
    chalk
    jest
    inquirer


.prompt([
    {
        name: 'text',
        message: 'Please enter up to 3 characters of text:',
        validate: charsValidate,    
    },  
    {
        name: 'shape',
        type: 'checkbox',
        choices: ['Square','circle', 'triangle'],
        message: 'What shape would you prefer?',
    },
    {
        name: 'shapeColour',
        type: 'input',
        default: '#00ff00',
        message: 'What colour is the shape? (provide colour name or hexcode)',
    }
])

.then(answers => { //assigns variables to each answer that is prompted
    
    const text = answers.text;
    const textColour = answers.txtColour;
    const shape = answers.shape;
    const shapeColour = answers.shapeColour;

    //below creates an array with all answers so it can be displayed in the new file
    const questions = [text, colour, shape];
    //below uses JSON to turn the array from [2] into a string
    const jsonStringData = JSON.stringify(questions, null, 2);
    
    //writes the svg file
    fs.writeFileSync(`./${fileName}`, jsonStringData), (err) =>  //must be 300x200px
    err ? console.error(err) : console.log('Success!') //logs any errors
    
    console.log('Answers:', answers);
    console.log(`Generated ${fileName}`);

});

}

init //runs the program


module.exports = init, Square, Circle, Triangle;