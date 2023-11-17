/**
* VARIABLES:
* 0. Variables serve as containers in memory, associating with various data types such as numbers, strings, booleans, etc.
* 1. Creating a variable involves using a declaration keyword (mentioned below) followed by a chosen name to represent the storage of the data type that has been assigned.
* 2. Var, let, and const are declaration keywords. Var can be reassigned, redeclared, and initialized 
* 3. Hoisting first moves all function declarations to the top of the scope followed by variable declarations. Variable initializations are not hoisted. This is important for programmers to consider due to the possibiility of code not running as intended. 
*/

// 1. declaration and assignment
var nameStudent; 
console.log(nameStudent); // prints => undefined

nameStudent = Cam;
console.log(nameStudent);

// 2. initialization or assignment
myName = 'john'; // Assigning a value to myName.
console.log(myName); // prints => john

// 3. Hoisting
var hoistThis = 'okay';

//... is essentially the same as
var hoistThis;
hoistThis = 'okay';
//...due to hoisting.