/**
* STRING MANIPULATION:
* 0. String Manioulation is the action of altering a string (simple data type) in a certain way typically with the use of methods.
*/

// 1. With operators //

// Concatenation using the + operator
let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName; // returns 'John Doe' (result of names added together with a space added between)

// String and Number concatenation
let age = 22;
let intro = 'I am ' + fullName + ' and I am ' + age + ' years old.';

// String interpolation/literal syntax
let introTemplateLiteral = `I am ${fullName} and I am ${age} years old.`;

// 2. With string methods //

let exampleString = 'Hello, World!';

let firstCharacter = exampleString.charAt(0); // 'H'

let withoutFirstLetter = exampleString.slice(1); // 'ello, World!'

let uppercaseString = exampleString.toUpperCase(); // 'HELLO, WORLD!'

let lowercaseString = exampleString.toLowerCase(); // 'hello, world!' 