const { addOrSubtract, addTwoNums, subtractTwoNums } = require('./index.js');
const functions = require('./index.js');

describe('addTwoNums()', () => {
    // it should have two arguments
    it('should have two arguments', () => {
        expect(functions.addTwoNums.length).toBe(2);
    });
    it('should add two numbers together and return the value', () => {
        expect(functions.addTwoNums(1, 2)).toBe(3);
    });
})

describe('subtractTwoNums()', () => {
    it('should have two arguments', () => {
        expect(functions.subtractTwoNums.length).toBe(2);
    });
    it('should subtract two numbers and return the value', () => {
        expect(functions.subtractTwoNums(1, 2)).toBe(-1);
    });
})

describe('addOrSubtract()', () => {
    it('should have three arguments', () => {
        expect(functions.addOrSubtract.length).toBe(3);
    });
    it('should add two numbers together or subtract them and return the value', () => {
        expect(functions.addOrSubtract(addTwoNums, 1, 3)).toBe(4);
        expect(functions.addOrSubtract(subtractTwoNums, 1, 2)).toBe(-1);
    });
})
// sizeMeUp() takes in a number. If the number is less than 10, return "Too small", else return "Damn Foley!!"
describe('sizeMeUp()', () => {
    it('should have one argument', () => {
        expect(functions.sizeMeUp.length).toBe(1);
    });
    it('should return "Too small" if the number is less than 10', () => {
        expect(functions.sizeMeUp(1)).toBe("Too small");
    });
    it('should return "Damn Foley!!" if the number is greater than 10', () => {
        expect(functions.sizeMeUp(11)).toBe("Damn Foley!!");
    });
})
