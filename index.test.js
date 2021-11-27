const {
  greet,
  sayGoodbye,
  sizeMeUp,
  addOrSubtract,
  addTwoNums,
  subtractTwoNums,
  greetOrSayGoodbye,
  greetOrSayGoodbyeToAll,
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
