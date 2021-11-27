const {
  greet,
  sizeMeUp,
  addOrSubtract,
  addTwoNums,
  subtractTwoNums,
} = require("./index.js");
// const functions = require('./index.js');

describe("greet()", () => {
  it("should have one argument", () => {
    expect(greet.length).toBe(1);
  });
  it("should greet the passed in name with a welcome message", () => {
    expect(greet("Joey")).toBe("Hello, Joey. Welcome to JavaScript!");
  });
});

describe("addTwoNums()", () => {
  it("should have two arguments", () => {
    expect(addTwoNums.length).toBe(2);
  });
  it("should add two numbers together and return the value", () => {
    expect(addTwoNums(1, 2)).toBe(3);
  });
});

describe("subtractTwoNums()", () => {
  it("should have two arguments", () => {
    expect(subtractTwoNums.length).toBe(2);
  });
  it("should subtract two numbers and return the value", () => {
    expect(subtractTwoNums(1, 2)).toBe(-1);
  });
});

describe("addOrSubtract()", () => {
  it("should have three arguments", () => {
    expect(addOrSubtract.length).toBe(3);
  });
  it("should add two numbers together or subtract them and return the value", () => {
    expect(addOrSubtract(addTwoNums, 1, 3)).toBe(4);
    expect(addOrSubtract(subtractTwoNums, 1, 2)).toBe(-1);
  });
});

describe("sizeMeUp()", () => {
  it("should have one argument", () => {
    expect(sizeMeUp.length).toBe(1);
  });
  it('should return "Too small" if the number is less than 10', () => {
    expect(sizeMeUp(1)).toBe("Too small");
  });
  it('should return "Damn Foley!!" if the number is greater than 10', () => {
    expect(sizeMeUp(11)).toBe("Damn Foley!!");
  });
});
