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
}

class Circle extends Shape {
    constructor (text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
}

class triangle extends Shape {
    constructor (text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
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
               const svgLogoCircle = `<svg version='1.1' width='300' height='200' xmlns="https://www.w3.org/2000/svg">
                <circle cx='150' cy='100' r='80' fill='green' />
                <text x='150' y='125' font-size='60' text-anchor='middle' fill='white'>AFK</text>
                </svg>`;

                const svgLogoTriangle = `<svg version='1.1' width='300' height='200' xmlns="https://www.w3.org/2000/svg">
                <polygon points="150, 18 244, 182 56, 182" fill="blue"/>
                <text x='150' y='125' font-size='40' text-anchor='middle' fill='white'>AFK</text>
                </svg>`;

                const svgLogoSquare = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="100" x="10" y="10" rx="10" ry="10" fill="blue" />
                <text x='150' y='125' font-size='40' text-anchor='middle' fill='white'>AFK</text>
                </svg>`;

                fs.writeFile('../examples/logo.svg', svgLogoSquare, (err) =>
                err? console.error(err) : console.log ('created file'));

            })
    }
}

const logo = new Logo ()
logo.run();


module.exports = Logo;
