/**
 * NOTE FOR ALEX: On some of these, they are just questions or it's simply information. I wasn't sure what to do for these parts but I did my best for this draft. Looking forward to the feedback!
* CONTROL FLOW:
* 0. Contro Flow
* 1. If statements check whether the specified condition is true. If true, the code block inside the if statement is executed. 
* 2. Else-if statement provides an alternative condition to check if the initial `if` condition is false.
* 3. Else statement is used if none of the previous conditions are true.
* 4. Switch statement is used to perform different actions based on different conditions. Comparable to the else-if statement.
*/

// 1. If statement //
let condition = true;
if (condition) {
  console.log('Condition is true');
}

// 2. Else-if statement //
let num = 10;
if (num > 10) {
  console.log('Number is greater than 10');
} else if (num < 10) {
  console.log('Number is less than 10');
} else {
  console.log('Number is equal to 10');
}

// 3. Else statement (paired with If or Else-if) //
let Logged = false;
if (Logged) {
  console.log('User is logged in');
} else {
  console.log('User is not logged in');
}

// 4. Switch statement //
let day = 'Monday';
switch (day) {
  case 'Monday':
    console.log('Its the start of the week');
    break;
  case 'Friday':
    console.log('Its almost the weekend');
    break;
  default:
    console.log('Its a regular day');
}

