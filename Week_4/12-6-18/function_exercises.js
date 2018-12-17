// Function Exercises 12-6-18

// --------------------------------------------------------------------

// Positive Numbers

function returnPositive (arr) {
    return arr.filter(function (num) {return num >= 0;});
}

// console.log(returnPositive([-1, -2, -3, 1, 2]));

// --------------------------------------------------------------------

// Even Numbers

function returnEven (arr) {
    return arr.filter(function (num) {return num % 2 == 0;});
}

// console.log(returnEven([1, 2, 3, 4, 5, 6]));

// --------------------------------------------------------------------

// Square the Numbers

function square (arr) {
    return arr.map(function (num) {return num ** 2;});
}

// console.log(square([1, 2, 3, 4, -5]));

// --------------------------------------------------------------------

// Cities 1

function cities1 (arr) {
    return arr.filter(function (object) {return object.temperature < 70;});
}

// var cities = [ { name: 'Los Angeles', temperature: 60.0}, { name: 'Atlanta', temperature: 52.0 }, { name: 'Detroit', temperature: 48.0 }, { name: 'New York', temperature: 80.0 } ];
// console.log(cities1(cities));

// --------------------------------------------------------------------

// Cities 2

function cities2 (arr) {
    return arr.filter(function (object) {return object.temperature < 70;}).map(function (object) {return object.name;});
}

// var cities = [ { name: 'Los Angeles', temperature: 60.0}, { name: 'Atlanta', temperature: 52.0 }, { name: 'Detroit', temperature: 48.0 }, { name: 'New York', temperature: 80.0 } ];
// console.log(cities2(cities));

// --------------------------------------------------------------------

// Good Job!

function congratulate (arr) {
    return arr.forEach(function (name) {return "Good Job, " + name + "!";});
}

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
// congratulate(people);

// --------------------------------------------------------------------

// Sort an Array

function alphabetize (arr) {
    return arr.sort();
}

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
// console.log(alphabetize(people));

// --------------------------------------------------------------------

// Sort an Array 2

function sortLength (arr) {
    return arr.sort(function(a, b) {return a.length - b.length});
}

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
// console.log(sortLength(people));

// --------------------------------------------------------------------

// Sort an Array 3

function sumArr (total, num) {
    return total + num;
}

function compareArr (a, b) {
    var sumA = a.reduce(sumArr);
    var sumB = b.reduce(sumArr);
    return sumA - sumB;
}

function sortArr (arr) {
    return arr.sort(compareArr);
}

// var arr = [ [1, 3, 4], [3, 6], [2, 4, 6, 8] ];
// console.log(sortArr(arr));

// --------------------------------------------------------------------

// 3 Times

function helloWorld () {
    console.log("Hello, world!");
}

function call3Times(fun) { fun(); fun(); fun(); }

// call3Times(helloWorld);

// --------------------------------------------------------------------

// N Times

function callNTimes(N, fun) { 
    
    for (var i = 0; i < N; i ++) {
        fun();
    }
}

// callNTimes(5, helloWorld);

// --------------------------------------------------------------------

// Sum an Arrary

function sum (total, num) {
    return total + num;
}

function sumAnArray (arr) {
    return arr.reduce(sum);
}

// var numbers = [1, 2, 3, 4, 5];
// console.log(sumAnArray(numbers));

// --------------------------------------------------------------------

// Acronym

function addLetter (buildAcronym, word) {
    return buildAcronym + word[0].toUpperCase();
}

function acronym (words) {
    return words.reduce(addLetter, "");
}

// var words = ['national', 'aeronautics', 'space', 'administration'];
// console.log(acronym(words));

// --------------------------------------------------------------------

// Bonus: forEach

function customForEach (arr, fun) {
    
    for (var i = 0; i < arr.length; i ++) {
        fun(arr[i]);
    }
}

// var arr = [ { name: 'Bob' }, { name:'Alice' }, { name:'Joe' } ];
// customForEach(arr, function(person) { console.log('Hello, ' + person.name + '!'); });

// --------------------------------------------------------------------

// Bonus: map

function customMap (arr, fun) {
    return fun(arr);
}

// var values = [1, 2, 3, 4, -5];
// console.log(customMap(values, square));

// --------------------------------------------------------------------

// Bonus: Caeser Cipher

function myCipher (text) {

    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    var letters = text.split("");

    var newLetters = letters.map(letter => {
        if (alphabet.indexOf(letter.toUpperCase()) + 13 >= 26) {
            return alphabet[alphabet.indexOf(letter.toUpperCase()) + 13 - 26];
        }
        else {
            return alphabet[alphabet.indexOf(letter.toUpperCase()) + 13];
        }
        
    });
    var result = newLetters.join("");
    return result;
}

// console.log(myCipher("Genius"))

// This is honestly MUCH more complicated than using a simple for loop.  
// Unless I'm doing it wrong.