import inquirer from "inquirer";
import fs from "fs";
import { argv } from "process";
import jest from "jest";
import { setColor, Circle, Square, Triangle, shapeCode} from "./shapes.mjs";

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
        type: 'list',
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
    
    const shape = answers.shape;
    let newShape;
    const text = answers.text;
    const textColour = answers.txtColour;
    const shapeColour = answers.shapeColour;

    if (shape === "square") {newShape = new Square(text, shapeColour, textColour);
    } else if (shape === "triangle") {newShape = new Triangle(text, shapeColour, textColour);
    } else if (shape === "circle") {newShape = new Circle(text, shapeColour, textColour);}
    //const questions = [text, colour, shape];
    newShape.render()
    const jsonStringData = JSON.stringify(shapeCode, null, 2);
    //fs.writeFileSync(`./${fileName}`, jsonStringData); (err) =>  //must be 300x200px
    fs.writeFileSync(`./${fileName}`, JSON.parse(jsonStringData), (err) => {  //writes svg file  
            if (err) {
                console.error(err);
            } else {
                console.log('Success!');
                console.log(`Generated ${fileName}`);   
            }
        });
    
    console.log(`this is the variable:${JSON.parse(jsonStringData)}`);
    console.log('Answers:', answers);
    console.log(`Generated ${fileName}`);
})
}

export {init, Square, Circle, Triangle};
init(); //runs the program

