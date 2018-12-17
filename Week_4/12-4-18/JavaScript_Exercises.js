// Javascript Exercises

// --------------------------------------------------------------------------------------------

// Madlib

function madlib (name, subject) {
    return name + "'s favorite subject in school is " + subject;
}

// console.log(madlib("Ray", "Chemistry"));

// --------------------------------------------------------------------------------------------

// Tip Calculator

function tipAmount (bill, service) {
    if (service == "good") {
        return bill * 0.2;
    }
    else if (service == "fair") {
        return bill * 0.15;
    }
    else if (service == "bad") {
        return bill * 0.1;
    }
    else {
        return "Invalid argument(s).  Please enter a valid bill amount/level of service.";
    }
}

// console.log(tipAmount(20, "bad"));

// --------------------------------------------------------------------------------------------

// Tip Calculator 2

function totalAmount (bill, service) {
    if (service == "good") {
        return bill * 1.2;
    }
    else if (service == "fair") {
        return bill * 1.15;
    }
    else if (service == "bad") {
        return bill * 1.1;
    }
    else {
        return "Invalid argument(s).  Please enter a valid bill amount/level of service.";
    }
}

// console.log(totalAmount(20, "bad"));

// --------------------------------------------------------------------------------------------

// Print Numbers

function printNumbersWhile (start, end) {
    var i = start;
    while (i < end + 1) {
        console.log(i);
        i += 1;
    }
}

function printNumbersFor (start, end) {
    for (var i = start; i < end + 1; i ++) {
        console.log(i);
    }
}

// printNumbersWhile(1, 10);
// printNumbersFor(1, 10);

// --------------------------------------------------------------------------------------------

// Print a Square

function printSquare (size) {
    for (var i = 0; i < size; i ++) {
        console.log("*".repeat(size));
    }
}

// printSquare(5);

// --------------------------------------------------------------------------------------------

// Print a Box

// Note:  Only works for boxes with dimensions 3 x 3 or greater.

function printBox (width, height) {
    if (width > 3 && height > 3) {
        console.log("*".repeat(width));

        for (var i = 0; i < height - 2; i ++) {
            console.log("*" + " ".repeat(width - 2) + "*");
        }

        console.log("*".repeat(width));
    }
    else {
        return "Invalid dimensions.  Please enter valid dimension sizes.";
    }
}

// printBox(8, 7);

// --------------------------------------------------------------------------------------------

// Print a Banner

function printBanner (text) {
    
    console.log("*".repeat(text.length + 4));
    console.log("* " + text + " *");
    console.log("*".repeat(text.length + 4));

}

// printBanner("Welcome to DigitalCrafts")

// --------------------------------------------------------------------------------------------

// Leetspeak

function leetspeak (string) {

    var leetstring = string.replace(/a/gi, "4"
        ).replace(/e/gi, "3"
        ).replace(/g/gi, "6"
        ).replace(/i/gi, "1"
        ).replace(/o/gi, "0"
        ).replace(/s/gi, "5"
        ).replace(/t/gi, "7");

    return leetstring;

}

// console.log(leetspeak("I am a leet hacker god!"));

// --------------------------------------------------------------------------------------------

// Long-long Vowels

function longLongVowels (string, howLong) {
    var longString = string.replace(/a/gi, "a".repeat(howLong)
        ).replace(/e/gi, "e".repeat(howLong)
        ).replace(/i/gi, "i".repeat(howLong)
        ).replace(/o/gi, "o".repeat(howLong)
        ).replace(/u/gi, "u".repeat(howLong)
        ).replace(/y/gi, "y".repeat(howLong));
    
    return longString;
}

// console.log(longLongVowels("This is going to be a long day", 10));

// --------------------------------------------------------------------------------------------

// Just the Positives

function positiveNumbers (array) {
    
    positiveArray = [];
    
    for (var i = 0; i < array.length; i ++) {
        if (array[i] > 0) {
            positiveArray.push(array[i]);
        }
    }

    return positiveArray;
}

// console.log(positiveNumbers([-1, 1, -2, 2, -3, 3, -5]))

// --------------------------------------------------------------------------------------------

// Bonus: Caeser Cipher

function caeserCipher (message, shift) {

    message = message.toLowerCase();
    var array = message.split(" ");
    var newArray = [];
    var alphabet = "abcdefghijklmnopqrstuvwxyz";

    if (shift > 25) {
        shift = shift % 26;
    }

    for (var i = 0; i < array.length; i ++) {
        var word = [];
        for (var j = 0; j < array[i].length; j ++) {
            var index = alphabet.indexOf(array[i][j]);
            if (shift + index > 25) {
                var letter = alphabet[index + shift - 26];
            }
            else {
                var letter = alphabet[index + shift];
            }
            word.push(letter);
        }
        newArray.push(
            word.join("")
        );
    }
    return newArray.join(" ");
}

// The first one tests a shift of 13 while the second tests a shift of 14

console.log(caeserCipher("Genius without education is like silver in the mine", 13));
console.log(caeserCipher("Genius without education is like silver in the mine", 14));

// --------------------------------------------------------------------------------------------

// Bonus: Caeser Cipher 2

function caeserDecipher (message, shift) {

    message = message.toLowerCase();
    var array = message.split(" ");
    var newArray = [];
    var alphabet = "abcdefghijklmnopqrstuvwxyz";

    if (shift > 25) {
        shift = shift % 26;
    }

    for (var i = 0; i < array.length; i ++) {
        var word = [];
        for (var j = 0; j < array[i].length; j ++) {
            var index = alphabet.indexOf(array[i][j]);
            if (shift > index) {
                var letter = alphabet[index - shift + 26];
            }
            else {
                var letter = alphabet[index - shift];
            }
            word.push(letter);
        }
        newArray.push(
            word.join("")
        );
    }
    return newArray.join(" ");
}

// Both should decipher into the starting phrase, "Genius... mine"

console.log(caeserDecipher("Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar", 13))
console.log(caeserDecipher("usbwig kwhvcih sriqohwcb wg zwys gwzjsf wb hvs awbs", 14))