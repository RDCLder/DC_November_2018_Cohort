// Function Rewrites

// Rewrite the following normal functions into callback functions

// function add(x, y) {
//   var result = x + y;
//   return result;
// }

function add(x, y, callback) {
  let result = x + y;
  callback(result);
};

function show(result) {
  console.log(result);
}

// add(2, 2, show);

// ----------------------------------------------------------------------------------------

// function subtract(x, y) {
//   return x - y;
// }

function subtract(x, y, callback) {
  let result = x - y;
  callback(result);
}

// subtract(5, 2, show);

// ----------------------------------------------------------------------------------------

function greeting(person, callback) {
  let msg = `Hola, ${person}!`;
  callback(msg);
}

// greeting("Bobby", show);

// ----------------------------------------------------------------------------------------

function product(numbers, callback) {
  let result = numbers.reduce(function (a, b) {
    return a * b;
  }, 1);
  callback(result);
}

// product([3, 5], show);

// ----------------------------------------------------------------------------------------

// Function Rewrites with a Delay

// Add a 1000 millisecond delay to the callback versions of the exercise above.

function showDelay(result) {
  setTimeout(() => {
    console.log(result);
  }, 1000);
}

add(2, 2, showDelay);
subtract(5, 2, showDelay);
greeting("Bobby", showDelay);
product([3, 5], showDelay);