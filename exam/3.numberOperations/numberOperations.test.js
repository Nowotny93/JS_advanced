const numberOperations = require('./numberOperations');
const expect = require('chai').expect;

describe('work', () => {
    describe('powNumber', () => {

        let num1 = 5
        let num2 = 6


        it('the function returns the power of the given number', () => {
            expect(numberOperations.powNumber(num1)).to.equal(25);
            expect(numberOperations.powNumber(num2)).to.equal(36);
        });
    })

    describe('numberChecker', () => {

        let num2 = 6
        let num3 = 101
        let input1 = 'something'

        it('function that accepts a single parameter', () => {
            //expect(numberOperations.numberChecker(input1)).to.equal(`The input is not a number!`);//
            expect(numberOperations.numberChecker(num2)).to.equal(`The number is lower than 100!`);
            expect(numberOperations.numberChecker(num3)).to.equal(`The number is greater or equal to 100!`);
        })
    })
})

