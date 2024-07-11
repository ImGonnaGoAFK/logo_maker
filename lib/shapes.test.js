const Square = require('./square.js')

describe('Shapes', () => {
    describe('Check to see if a square is being created', () => {
        const expectedText = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="150" height="150" x="75" y="40" fill="red" />
                <text x='150' y='125' font-size='40' text-anchor='middle' fill='blue'>own</text>
                </svg>`;
        const square = new Square ('own', 'blue', 'red')
    

        expect(square.render()).toEqual(expectedText);
    })
})