// Create and store password

// 1. Take user password
// 2. Generate a salt (string of random char.)
// 3. Combine salt and user password
// 4. Hash the combined string with the same crypto algorithm used at the time of
// 5. Compare 

var pbkdf2 = require("pbkdf2");
var crypto = require("crypto");

var salt = crypto.randomBytes(20).toString("hex");
var password = "password1";
var key = pbkdf2.pbkdf2Sync(password, salt, 36000, 256, "sha256");
var hash1 = key.toString("hex");
console.log(hash1);

var passwordParams = `pbkdf2_sha256$36000$${salt}$${hash1}`;

// Check entered password & retrieve password from database

var passwordArr = passwordParams.split("$");
var enteredPassword = "password1";
var key = pbkdf2.pbkdf2Sync(
    enteredPassword,
    passwordArr[2],
    Number(passwordArr[1]),
    256,
    "sha256"
);
var hash2 = key.toString("hex");
console.log(hash2 == hash);