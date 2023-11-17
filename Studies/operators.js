/**
* OPERATORS:
* 0. Operators are used to analyze or alter variables and are a crucial part of programming. You can use them to assign values to variales, perform mathematic equations, and many more.
* 1. Assignment operators initialize a value to a variable
* 2. Arithmetic operators perform math on at least two variables or values
* 3. Comparison operators analyze variables or values and compares and contrasts them to others (trying not to use the word in the definition)
* 4. Logical operators allow for multiple variables or values to be analyzed at a time instead of in multiple lines
* 5. Unary operators (!, typeOf, -) are used to negate certain values, identify the type of data type, or create the negative(or positve, if negative) version of a value;
* 6. Ternary operator (a ? b : c) is a more concise way to utilize the same abilites as if-else statements
*/

// 1. Assignment operators 
let x = 5;

// 2. Arithmetic operators 
let addition = x + y; // 15
let subtraction = x - y; // -5
let multiplication = x * y; // 50
let division = y / x; // 2

// 3. Comparison operators 
let isEqual = x === y; // false
let isNotEqual = x !== y; // true
let greaterThan = x > y; // false
let lessThanOrEqual = x <= y; // true

// 4. Logical operators 
let andOperator = (x < 10 && y > 5); // true
let orOperator = (x < 0 || y < 0); // false

// 5. Unary operators (!, typeOf, -) 
let notOperatorUnary = !true; // false
let typeOfOperator = typeof x; // "number"

// 6. Ternary operator (a ? b : c) 
let isPositive = (x > 0) ? 'Positive' : 'Not positive';

console.log(isPositive); // prints => 'Not positive'

//^^^clean up later