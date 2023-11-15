/**
* OPERATORS:
* 1. Assignment operators
* 2. Arithmetic operators
* 3. Comparison operators
* 4. Logical operators
* 5. Unary operators (!, typeOf, -)
* 6. Ternary operator (a ? b : c)
*/

// 1. Assignment operators //
let x = 5;
let y = 10;

// 2. Arithmetic operators //
let addition = x + y; // 15
let subtraction = x - y; // -5
let multiplication = x * y; // 50
let division = y / x; // 2
let modulus = y % x; // 0 (remainder of y divided by x)

// 3. Comparison operators //
let isEqual = x === y; // false
let isNotEqual = x !== y; // true
let greaterThan = x > y; // false
let lessThan = x < y; // true
let greaterThanOrEqual = x >= y; // false
let lessThanOrEqual = x <= y; // true

// 4. Logical operators //
let andOperator = (x < 10 && y > 5); // true
let orOperator = (x < 0 || y < 0); // false
let notOperator = !(x === y); // true

// 5. Unary operators (!, typeOf, -) //
let notOperatorUnary = !true; // false
let typeOfOperator = typeof x; // "number"
let negationOperator = -x; // -5

// 6. Ternary operator (a ? b : c) //
let isPositive = (x > 0) ? 'Positive' : 'Not positive';

console.log(isPositive); // prints => 'Not positive'