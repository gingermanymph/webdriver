/* Options for calculator
ADDITION
DIVISION
MODULO
MULTIPLICATION
SUBTRACTION
*/

const Calc = require('../pageobjects/calc');
const Results = require('../pageobjects/results');

describe('Adding two numbers', () => {
    it('should add two numbers', async () => {
        await Calc.open('');

        await Calc.calculation(2, 2, 'ADDITION');
        await expect(Results.simpleResult).toBeExisting();
        await expect(Results.simpleResult).toHaveTextContaining('4');
    });
});

describe('Dividing two numbers', () => {
    it('should devide two numbers', async () => {
        // await Calc.open('');

        await Calc.calculation(20, 2, 'DIVISION');
        await expect(Results.simpleResult).toBeExisting();
        await expect(Results.simpleResult).toHaveTextContaining('10');
    });
});

describe('Dividing by modulo two numbers', () => {
    it('should devide two numbers by modulo', async () => {
        // await Calc.open('');

        await Calc.calculation(5, 5, 'MODULO');
        await expect(Results.simpleResult).toBeExisting();
        await expect(Results.simpleResult).toHaveTextContaining('0');
    });
});

describe('Multiply two numbers', () => {
    it('should multiply two numbers', async () => {
        // await Calc.open('');

        await Calc.calculation(5, 5, 'MULTIPLICATION');
        await expect(Results.simpleResult).toBeExisting();
        await expect(Results.simpleResult).toHaveTextContaining('25');
    });
});

describe('Subtraction two numbers', () => {
    it('should Subtract two numbers', async () => {
        // await Calc.open('');

        await Calc.calculation(100, 1, 'SUBTRACTION');
        await expect(Results.simpleResult).toBeExisting();
        await expect(Results.simpleResult).toHaveTextContaining('99');
    });
});

describe('Verifying all results', () => {
    it('should verisy all calculated results', async () => {

        await expect(Results.historyResult).toBeExisting();
        await expect(Results.historyResult[0]).toHaveTextContaining('99');
        await expect(Results.historyResult[1]).toHaveTextContaining('25');
        await expect(Results.historyResult[2]).toHaveTextContaining('0');
        await expect(Results.historyResult[3]).toHaveTextContaining('10');
        await expect(Results.historyResult[4]).toHaveTextContaining('4');
    });
    
});