import {init, Square, Triangle, Circle} from "./index.mjs";

test('circle should generate a circle svg', () => { 
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    
});

test('square should generate a square svg', () => { 
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    
});

test('triangle should generate a triangle svg', () => { 
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    
});