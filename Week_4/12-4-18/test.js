var message = "Genius without education is like silver in the mine";
var shift = 47;

message = message.toLowerCase();
var array = message.split(" ");
var newArray = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

if (shift > 25) {
    shift = shift % 26;
}

// console.log(array, shift)
// console.log(array[2][2])
// console.log(alphabet.indexOf(array[2][2]) + shift - 26)
// console.log(alphabet[alphabet.indexOf(array[2][2]) + shift - 26])

var word = [];

var index = alphabet.indexOf(array[2][2]);
if (shift + index > 25) {
    var letter = alphabet[index + shift - 26];
}
else {
    var letter = alphabet[index + shift];
}
word.push(letter);

console.log(word)

