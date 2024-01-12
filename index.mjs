import inquirer from "inquirer";
import fs from "fs";
//import chalk from "chalk";
import { argv } from "process";
import jest from "jest";

//defining different shape classes
class Triangle {
    constructor() {
        this.shapeColour = "black";
    }
    
    setColor(shapeColour) {
        this.shapeColour = shapeColour;   
    }
    
    render() {
        const coordinates = "150,18 244,182 56,182"; //coordinates of triangle
        const ShapeCode = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">  //create code for generating shape with variables from input<polygon points="${coordinates}" fill="${this.colour}" />
        <text xmlns="http://www.w3.org/2000/svg" x="150" y="150" font-size="50" text-anchor="middle" fill="${textColour}">${text}</text>
        </svg>`;
    return ShapeCode;
    }
};


class Square {
    constructor() {
        this.shapeColour = "black";
    }
    
    setColor(shapeColour) {
        this.shapeColour = shapeColour;
    }
    render() {
        const ShapeCode = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">  //create code for generating shape with variables from input
        <rect x="45" y="45" width="200" height="200" stroke="black" fill="${shapeColour}" stroke-width="5"/>
        <text xmlns="http://www.w3.org/2000/svg" x="150" y="150" font-size="60" text-anchor="middle" fill="${textColour}">${text}</text>
        </svg>`
        return ShapeCode;
    }
};

class Circle {
    constructor() {
        this.shapeColour = "black";
    }
    
    setColor(colshapeColour) {
        this.shapeColour = shapeColour;   
    }
    
    render() {
        
        const ShapeCode = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="100" r="80" fill="${shapeColour}"/>
        <text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="60" text-anchor="middle" fill="${textColour}">${text}</text>
        </svg>`;
        return ShapeCode;
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
    const colour = answers.shapeColour;

    //below creates an array with all answers so it can be displayed in the new file
    const questions = [text, colour, shape];
    //below uses JSON to turn the array from [2] into a string
    const jsonStringData = JSON.stringify(ShapeCode, null, 2);
    
    //writes the svg file
    fs.writeFileSync(`./${fileName}`, jsonStringData), (err) =>  //must be 300x200px
    err ? console.error(err) : console.log('Success!') //logs any errors
    
    console.log('Answers:', answers);
    console.log(`Generated ${fileName}`);

});

}

export {init, Square, Circle, Triangle};
init //runs the program

