// Node.js HW 2

// ----------------------------------------------------------------------------------------

// Read a File

// const fs = require("fs");
// let filename = "file1.txt";

// fs.readFile(filename, (error, buffer) => {
//     if (error) {
//         console.error(error.message);
//         return;
//     }
//     console.log(`Uppercase: ${buffer.toString().toUpperCase()}`);
// })

// ----------------------------------------------------------------------------------------

// DNS Lookup

// const readline = require("readline");
// const dns = require("dns");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter a Domain Name to search: ", (answer) => {

//     dns.lookup(answer, (err, address, family) => {
//         if (err) {
//             console.error(err.message);
//             return;
//         }
//         console.log(`IP Address: ${address}\nFamily: ${family}`);
//     });
// rl.close();

// });

// ----------------------------------------------------------------------------------------

// Read and Write

// const readline = require("readline");
// const fs = require("fs");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter a file to read: ", (answer) => {

//     var file1 = answer;

//     rl.question("Enter the file to create: ", (answer) => {

//         var file2 = answer;

//         fs.readFile(file1, function (error, buffer) {

//             if (error) {
//               console.error(error.message);
//               return;
//             }
//             const contents = buffer.toString().toUpperCase();

//             fs.writeFile(file2, contents, function (error) {
//               if (error) {
//                 console.error(error.message);
//                 return;
//               }
//               console.log(`Saved as ${file2}!`);
//             });

//         });
//     });
//     rl.close();
// });

// ----------------------------------------------------------------------------------------

// Save a Web page

// const request = require("request");
// const readline = require("readline");
// const fs = require("fs");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter the website's URL: ", (URL) => {
//     request.get(URL, (error, response, body) => {
//         if (error) {
//             console.error(error.message);
//             return;
//         }
//         rl.question("Enter the file name: ", (filename) => {
//             rl.close();
//             fs.writeFile(filename, body, (error) => {
//                 if (error) {
//                     console.error(error.message);
//                     return;
//                 }
//                 console.log(`Saved as ${filename}!`);
//             });
//         })
//     })
// });

// ----------------------------------------------------------------------------------------

// Challenge: Resize an Image

const request = require("request");
const fs = require('fs')
    , gm = require('gm').subClass({ imageMagick: true });

const options = {
    url: "https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png",
    encoding: null
};

const path = "resized.png";

request(options, (error, response, imageData) => {
    if (error) {
        console.error(error.message);
        return;
    }
    console.log(imageData);
    gm(imageData)
    .resize(240, 240)
    .noProfile()
    .write(path, (error) => {
        if (error) {
            console.error(error.message);
            return;
        }
        console.log(`Image saved as ${path}.`);
    });
});