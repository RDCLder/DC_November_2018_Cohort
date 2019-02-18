// let arr = [1, 2, 3, 3, 4, 5, 6];
// let newArr = [];

// for (let num of arr) {
//     if (!newArr.includes(num)) {
//         newArr.push(num);
//     }
// }

// console.log(newArr);

// let language = "python, obviously";
// language = language[0].toUpperCase() + language.slice(1, language.length);
// console.log(language);

function favoriteLanguage(language) {
    let language = prompt("What's your favorite language?", "Python, obviously");
    if (language.length < 2) {
        return "Wrong answer!";
    }
    language = language[0].toUpperCase() + language.slice(1, language.length);
    console.log(language);
    if (language !== "Python, obviously" && language !== "Python") {
        return "Wrong answer!";
    }
    return "Ah, I see you're a man of culture as well."
}