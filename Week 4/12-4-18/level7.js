// Level 7 Exercises

// Write a function that takes a number as an input. 
// Have it create an empty array and then push a string into the array as many 
// times as the input number
//
// Name the function "finalFunction"

function finalFunction (num, str) {
    
    var arr = [];

    for (var i = 0; i < num; i ++) {
        arr.push(str);
    }
    
    return arr;
}

console.log(finalFunction(3, "test"))