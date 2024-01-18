import {setColor, Square, Circle, Triangle} from "./shapes.mjs";

test('circle should generate a circle svg', () => { 
    const shape = new Circle(text, shapeColour, textColour);
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    
});

test('square should generate a square svg', () => { 
    const shape = new Square(text, shapeColour, textColour);
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    
});

test('triangle should generate a triangle svg', () => { 
    const shape = new Triangle(text, shapeColour, textColour);
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    
});