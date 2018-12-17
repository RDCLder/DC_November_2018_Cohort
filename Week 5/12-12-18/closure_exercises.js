// Closure Exercises

// ------------------------------------------------------------------------------------------

// Counter

// function counter() {
//     var counter = 0;
//     return () => {counter += 1; return counter;};
// };

// var count1 = counter()
// var count2 = counter()

// count1();
// count1();
// console.log(count1());
// count2();
// console.log(count2());

// ------------------------------------------------------------------------------------------

// Counter 2

// function counter2(initialCount=0) { // The default value is 0, but the user can set it with an argument.
//     var counter = initialCount;
//     return () => {counter += 1; return counter;};
// }

// var count1 = counter2(4);
// var count2 = counter2();

// count1();
// console.log(count1());
// console.log(count2());

// ------------------------------------------------------------------------------------------

// Counter 3

function counter3(initialCount=0) {
    var counter = initialCount;
    function change(n) {
        counter += n;
    }
    return {
        increment: function() {
            change(1);
        },
        decrement: function() {
            change(-1);
        }
    };
    // return counter;
}

var count = counter3(4);
count.increment();
count.increment();
console.log(count);