# Getting Started

- Run `npm install` in the terminal to install the dependencies.
- To run the tests in watch mode: `jest --watch index.test`
- Type `a` to run the tests, or follow the prompts for other options.

# Function Basics

- Any parameters (arguments) that we pass to a function go into the parentheses.
- All logic goes inside the curly braces.
- All functions must return something, somehow.
- Note: if our return value can fit on one line, we can omit the curly braces.


# greet()
- Takes in a `name` as a parameter.
- Should return a string with the following greeting:
    - Hello, [name]. Welcome to JavaScript!
- The solution may include `string interpolation` or `concatenation`.
    - String interpolation is preferred over concatenation.
    - String interpolation is more readable.

# sayGoodbye()
- Takes in a `name` as a parameter.
- Should return a string with the following message:
    - Goodbye, [name]!
- The solution may include `string interpolation` or `concatenation`.

# addTwoNums()
- Takes in two numbers as parameters.
- Should return the sum of the two numbers.
- Worth it to start getting familiar with JavaScript `operators`.
    - In this case, the solution should include a simple `Arithmetic operator`.

# subtractTwoNums()
- Takes in two numbers as parameters.
- Should return the difference of the two numbers.
- Worth it to start getting familiar with JavaScript `operators`.
    - In this case, the solution should include a simple `Arithmetic operator`.

# addOrSubtract()
- This solution introduces `callback functions`.
- Takes in a callback function and two numbers as parameters.
- Should return the result of the callback function with the two numbers as parameters.
- This solution is very easy to overthink.

# greetOrSayGoodbye()
- This solution introduces `callback functions`.
- Takes in a callback function and a `name` as parameters.
- Should return the result of the callback function with the `name` as a parameter.
- This solution is very easy to overthink.

# greetOrSayGoodbyeToAll()
- This solution introduces `array methods`
- Takes in a callback function and an array of `names` as parameters.
- Should return a new array with the results of the callback function with each `name` as a parameter.
    - NOTE: More specifically, we will be using the `map()` array method.

# sizeMeUp()
- This solution introduces `conditional statements`.
    - More specifically we will be using the `if/else` statement.
- This solution also introduces new operators called `comparison operators`.
- Takes in a number as a parameter.
- If the number passed in is less than 10, the function should return a string with the following message:
    - "Too small"
- If the number passed in is greater than or equal to 10, the function should return a string with the following message:
    - "Damn Foley!!"

# sortNumbers()
- This solution introduces another `array method` known as `sort()`.
- We will also be using the `if/else` statement again and the `===` `comparison operator`.
- Note: `===` is the strict equality operator.
    - It is important to know the difference between `==` and `===` comparison operators.
- The solution is a bit tricky, you cant use `sort()` out of the box
    - You will have to write some logic inside of the `sort()` method.
- The function takes in two arguments:
    - An array of numbers.
    - An order condition.
    - Use "ascending" and "descending" as the order conditions inside the functions code.
- The solution should:
    - If the order condition is "ascending", sort the array in ascending order.
    - If the order condition is "descending", sort the array in descending order.
    - If the order condition is not "ascending" or "descending", return an error message saying "Please enter a valid method".
    - Return the sorted array.


