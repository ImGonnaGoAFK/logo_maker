const inquirer = require('inquirer');
const fs = require('fs');

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
               const svgLogo = `<svg version='1.1' width='300' height='200' xmlns="https://www.w3.org/2000/svg">
                <circle cx='150' cy='100' r='80' fill='green' />
                <text x='150' y='125' font-size='60' text-anchor='middle' fill='white'>AFK</text>
                </svg>`;

                fs.writeFile('../examples/logo.svg', svgLogo, (err) =>
                err? console.error(err) : console.log ('created file'));

            })
    }
}

const logo = new Logo ()
logo.run();


module.exports = Logo;
