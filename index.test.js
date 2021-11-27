const {
  greet,
  sayGoodbye,
  sizeMeUp,
  addOrSubtract,
  addTwoNums,
  subtractTwoNums,
  greetOrSayGoodbye,
  greetOrSayGoodbyeToAll,
  sortNumbers,
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

describe("sayGoodbye()", () => {
  it("should have one argument", () => {
    expect(sayGoodbye.length).toBe(1);
  });
  it("should say goodbye to the passed in name", () => {
    expect(sayGoodbye("Joey")).toBe("Goodbye, Joey!");
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

describe("greetOrSayGoodbye()", () => {
  it("should have two arguments, a callback function and a name", () => {
    expect(greetOrSayGoodbye.length).toBe(2);
  });
  it("should greet or say goodbye to the passed in name", () => {
    expect(greetOrSayGoodbye(greet, "Joey")).toBe(
      "Hello, Joey. Welcome to JavaScript!"
    );
    expect(greetOrSayGoodbye(sayGoodbye, "Joey")).toBe("Goodbye, Joey!");
  });
});

describe("greetOrSayGoodbyeToAll()", () => {
  let names = ["Joey", "Yin", "Kogn", "Foley"];
  it("should have two arguments, a callback function and an array of names", () => {
    expect(greetOrSayGoodbyeToAll.length).toBe(2);
  });
  it("should return a new array with greeting or goodbye messages to every name in the array", () => {
    expect(greetOrSayGoodbyeToAll(greet, names)).toStrictEqual([
      "Hello, Joey. Welcome to JavaScript!",
      "Hello, Yin. Welcome to JavaScript!",
      "Hello, Kogn. Welcome to JavaScript!",
      "Hello, Foley. Welcome to JavaScript!",
    ]);
    expect(greetOrSayGoodbyeToAll(sayGoodbye, names)).toStrictEqual([
      "Goodbye, Joey!",
      "Goodbye, Yin!",
      "Goodbye, Kogn!",
      "Goodbye, Foley!",
    ]);
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

describe("sortNumbers()", () => {
  let nums = [2, 11, 5, 4, 3, 1, 9, 7, 6, 8];
  it("should have two arguments, an array of numbers and an order method ('ascending' or 'descending')", () => {
    expect(sortNumbers.length).toBe(2);
  });
  it('should return an array of sorted numbers if order method is "ascending"', () => {
    expect(sortNumbers(nums, "ascending")).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 11,
    ]);
  });
  it('should return an array of reverse sorted numbers if order method is "descending"', () => {
    expect(sortNumbers(nums, "descending")).toStrictEqual([
      11, 9, 8, 7, 6, 5, 4, 3, 2, 1,
    ]);
  });
  it("should return an error message if invalid order method is passed in", () => {
    expect(sortNumbers(nums, "intentionally invalid method")).toBe(
      "Please enter a valid method"
    );
  });
});
