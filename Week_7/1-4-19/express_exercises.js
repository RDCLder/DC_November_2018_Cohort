// Express Exercises

// ----------------------------------------------------------------------------------------------------------------

// Hello World

var express = require("express");
var app = express();

// app.get("/", (request, response) => {
//     response.send("Hello, world!");
// })

// app.listen(8000, function () {
//     console.log('Listening on port 8000');
// });

// ----------------------------------------------------------------------------------------------------------------

// Routes

// app.get("/cats", (request, response) => {
//     response.send("Meow");
// });

// app.get("/dogs", (request, response) => {
//     response.send("Woof");
// });

// app.get("/cats_and_dogs", (request, response) => {
//     response.send("Living together");
// });

// app.listen(8000, function () {
//     console.log('Listening on port 8000');
// });

// ----------------------------------------------------------------------------------------------------------------

// Route Parameters

// app.get(`/greet/:user`, (request, response) => {
//     let userName = request.param("user");
//     let upperName = userName[0].toUpperCase() + userName.slice(1, userName.length);
//     response.send(`Hello, ${upperName}`);
// });

// app.listen(8000, function () {
//     console.log('Listening on port 8000');
// });

// ----------------------------------------------------------------------------------------------------------------
// Query Parameters

app.get(`/greet/:user?`, (request, response) => {
    let userName = request.param("user");
    let upperName = userName[0].toUpperCase() + userName.slice(1, userName.length);
    let year = 2018 - Number(request.query.age) || `1985`;
    if (request.query.age == null) {
        response.send(`Hello, ${upperName}.  Since you didn't enter an age, I'm going to assume you're old and born before 1985.`);
    }
    else {
        response.send(`Hello, ${upperName}. Since you're ${request.query.age}, you were born in ${year}, probably.`);
    }
});

app.listen(8000, function () {
    console.log('Listening on port 8000');
});

// ----------------------------------------------------------------------------------------------------------------