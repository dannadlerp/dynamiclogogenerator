let shapeCode = "";

//defining different shape classes
class Triangle {
    constructor(text, shapeColour, textColour) {
         /* shapeColour = this.shapeColour;
         text = this.text;
         textColour = this.txtColour; */
         this.shapeColour = shapeColour;
         this.text = text;
         this.txtColour = textColour;
    }
    
    setColor() {this.shapeColour = shapeColour;}
    
    render() {
        const coordinates = "150,18 244,182 56,182"; //coordinates of triangle
        shapeCode = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">  //create code for generating shape with variables from input<polygon points="${coordinates}" fill="${this.shapeColour}" />
        <text xmlns="http://www.w3.org/2000/svg" x="150" y="150" font-size="50" text-anchor="middle" fill="${this.txtColour}">${this.text}</text>
        </svg>`;
    return shapeCode;
    }
};


class Square {
    constructor(text, shapeColour, textColour) {
        
        this.shapeColour = shapeColour;
        this.text = text;
        this.txtColour = textColour;
        
    }

    setColor() {this.shapeColour = shapeColour;}

    render() {
        shapeCode = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">  //create code for generating shape with variables from input
        <rect x="45" y="45" width="200" height="200" stroke="black" fill="${this.shapeColour}" stroke-width="5"/>
        <text xmlns="http://www.w3.org/2000/svg" x="150" y="150" font-size="60" text-anchor="middle" fill="${this.txtColour}">${this.text}</text>
        </svg>`
        return shapeCode;
    }
};

class Circle {
        constructor(text, shapeColour, textColour) {
            this.shapeColour = shapeColour;
            this.text = text;
            this.txtColour = textColour;
        
    }

    setColor() {this.shapeColour = shapeColour;}

    render() {
        
        shapeCode = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="100" r="80" fill="${this.shapeColour}"/>
        <text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="60" text-anchor="middle" fill="${this.txtColour}">${this.text}</text>
        </svg>`;
        return shapeCode;
    }
};
export {Circle, Square, Triangle, shapeCode}
