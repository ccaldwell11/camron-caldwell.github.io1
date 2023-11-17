/**
* LOOPS:
* 0. Loops are used to repeat specific tasks based on a condition(s) that typically return a boolean value
* 1. While loops iterate over a collection as long as the statement within it is true. Often used when the number of iterations needed is unknown. 
* For loops iterate over a collection as long as the statement within it is true. For-In loops are used for iterating over object properties.
*
*/

// 1. Explain while, for, and for-in loops //


let i = 0;
while (i < 5) {
  console.log('While Loop:', i);
  i++;
}

for (let j = 0; j < 5; j++) {
  console.log('For Loop:', j);
}

// For-In loops are used for iterating over object properties
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log('For-In Loop:', key, obj[key]);
}

// 2. Be able to loop any number of times, forward counting up to some limit, backward counting down to 0 //

// Forward counting with for loop:
for (let i = 0; i < 11; i++) {
  console.log(i);
}

// Backward counting with for loop:
for (let i = 20; i > 0; i--) {
  console.log(i);
}

// 3. Loop over an Array, forwards and backwards //

let myArray = [1, 2, 3, 4, 5];

// Forward loop over an Array:
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// Backward loop over an Array:
for (let i = myArray.length - 1; i >= 0; i--) {
  console.log(myArray[i]);
}

// 4. Loop over an Object //

let myObject = { a: 'apple', b: 'banana', c: 'cherry' };

// Loop over an Object using for-in loop:
for (let key in myObject) {
  console.log(myObject[key]);
}
