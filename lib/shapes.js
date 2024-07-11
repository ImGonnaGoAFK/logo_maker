const inquirer = require('inquirer');
const fs = require('fs');

class Shape {
    constructor (text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Square extends Shape {
    constructor (text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="150" height="150" x="75" y="40" fill="${this.shapeColor}" />
                <text x='150' y='125' font-size='40' text-anchor='middle' fill='${this.textColor}'>${this.text}</text>
                </svg>`;
    }
}

class Circle extends Shape {
    constructor (text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<svg version='1.1' width='300' height='200' xmlns="https://www.w3.org/2000/svg">
                <circle cx='150' cy='100' r='80' fill="${this.shapeColor}" />
                <text x='150' y='125' font-size='60' text-anchor='middle' fill='${this.textColor}'>${this.text}</text>
                </svg>`;
    }
}

class Triangle extends Shape {
    constructor (text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<svg version='1.1' width='300' height='200' xmlns="https://www.w3.org/2000/svg">
                <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
                <text x='150' y='125' font-size='40' text-anchor='middle' fill='${this.textColor}'>${this.text}</text>
                </svg>`;
    }
}


class Logo {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What do you want inside the logo (3 character max)?',
                    name: 'text',
                },

                {
                    type: 'input',
                    message: 'What color do you want the text to be (name or hexadecimal number)?',
                    name: 'textColor',
                },

                {
                    type: 'list',
                    message: 'What shape do you want the logo to be?',
                    name: 'shape',
                    choices: ['circle', 'square', 'triangle']
                },
                {
                    type: 'input',
                    message: 'What color do you want the shape to be (name or hexadecimal number)?',
                    name: 'shapeColor'
                },
            ])

            .then((data) => {
                const chosenShape = data.shape;

                if (chosenShape === 'circle') {
                    const circle = new Circle (data.text, data.textColor, data.shapeColor)
                    fs.writeFile('./examples/logo.svg', circle.render(), (err) =>
                        err? console.error(err) : console.log ('created file'));
                }

                else if (chosenShape === 'triangle') {
                    const triangle = new Triangle (data.text, data.textColor, data.shapeColor)
                    fs.writeFile('./examples/logo.svg', triangle.render(), (err) =>
                        err? console.error(err) : console.log ('created file'));
                }

                else {
                    const square = new Square (data.text, data.textColor, data.shapeColor)
                    fs.writeFile('./examples/logo.svg', square.render(), (err) =>
                        err? console.error(err) : console.log ('created file'));
                }
            })

            // .then((svgText) => {
            //     fs.writeFile('./examples/logo.svg', JSON.stringify(svgText), (err) =>
            //         err? console.error(err) : console.log ('created file'));
            // })
    }
}

module.exports = Logo, Square, Triangle, Circle;
