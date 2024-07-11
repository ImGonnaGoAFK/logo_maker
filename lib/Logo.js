const inquirer = require('inquirer');
const fs = require('fs');
const Square = require('./square.js');
const Triangle = require('./triangle.js');
const Circle = require('./circle.js');

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

module.exports = Logo;
