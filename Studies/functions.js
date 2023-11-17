/**
 * Note to instructor: The missing numbers were just facts or terms that were already explained so I added the examples in for those
* FUNCTIONS:
* 1. The two phases to using functions: First we must DECLARE. Then, we can execute (or invoke) a function by CALLING or INVOKING it.
* 2. Paramters are what is being asked for while arguments are what was given. (Too simple?)
* 5. Functions *can* take inputs, called parameters, and return a value of some sort that is usually determined in the code block of the function. The value that is returned is an argument (is this what the question was asking?) 
* 6. Scope is the context in which variables are stored and/or accessed.
* 7. Closures are when a function referces another regardless of the status of the parent function.
*/

// Declaration phase
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  // Invocation phase
  let greetingMessage = greet('Alice');
  console.log(greetingMessage); // prints => 'Hello, Alice!'
  
  /**
  * 2. The difference between a function's parameters and arguments PASSED to a function is that parameters are the variables listed in the function's definition, while arguments are the actual values passed to the function when it is invoked.
  */
  
  //          parameters  
  function add(a, b) {
    return a + b;
  }
  
  let result = add(3, 7); // arguments
  console.log(result); // prints => 10
  
  // 3. The syntax for a NAMED function is:
  
  function timesThree(number) {
    return number * number * number;
  }
  
  
  // 4. To assign a function to a variable, you can use a function expression:
  
  const multiply = function (x, y) {
    return x * y;
  };
  
  let product = multiply(4, 5);
  console.log(product); // prints => 20
  
  
  // 5
  
  function multiplyByTwo(x) {
    return x * 2;
  }
  
  let resultMultiplier = multiplyByTwo(3); // parameter is 3
  console.log(resultMultiplier); // prints 6
  
  // 6. Scope
  
  let globalVariable = 'global';
  
  function modifyGlobal() {
    globalVariable = 'new global';
  }
  
  modifyGlobal();
  console.log(globalVariable); // prints => 'new global'
  
  // 7. Closure
  
  function outerFunction() {
    let data = 'closed';
  
    function innerFunction() {
      console.log(data);
    }
  
    return innerFunction;
  }
  
  let closure = outerFunction();
  closure(); // prints => 'closed'