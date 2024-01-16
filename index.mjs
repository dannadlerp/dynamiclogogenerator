import inquirer from "inquirer";
import fs from "fs";
import { argv } from "process";
import jest from "jest";
import { Circle, Square, Triangle, shapeCode} from "./shapes.mjs";

const init = async () => {

const fileName = 'logo.svg';
let newShape = "";
function charsValidate(input) {
    if(input.length <= 3) {return true}
    else {return false}
    console.log("Please enter maximum of 3 characters");
}

    fs
    jest
await inquirer

.prompt([
    {
        name: 'text',
        message: 'Please enter up to 3 characters of text:',
        validate: charsValidate,    
    },  
    {
        name: 'txtColour',
        type: 'input',
        default: '#00ff00',
        message: 'What colour is the text? (provide colour name or hexcode)',
    },
    {
        name: 'shape',
        type: 'checkbox',
        choices: ['square','circle', 'triangle'],
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
    if (shape === "square") {newShape = new Square();
    } else if (shape === "triangle") {newShape = new Triangle();
    } else if (shape === "circle") {newShape = new Circle();}
    //const questions = [text, colour, shape];
    //const jsonStringData = JSON.stringify(ShapeCode, null, 2);
    fs.writeFileSync(`./${fileName}`, shapeCode); (err) =>  //must be 300x200px
    //below creates an array with all answers so it can be displayed in the new file
    //below uses JSON to turn the array from [2] (from node) into a string
    
    //writes the svg file
    err ? console.error(err) : console.log('Success!') //logs any errors
    
    console.log(`this is the variable:${shapeCode}`);
    console.log('Answers:', answers);
    console.log(`Generated ${fileName}`);
})
}

export {init, Square, Circle, Triangle};
init(); //runs the program

