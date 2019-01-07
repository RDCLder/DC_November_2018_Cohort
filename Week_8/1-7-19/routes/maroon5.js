
const express = require('express');
const router = express.Router();
var data = require('../data/data.json')

router.get('/maroon5', (req, res)=>{

    var maroon5 = data.maroon5;
    var html = `
    <div class="header" style="background-color: navy; text-align: center; height: 50px;"><h1 style="color: white;">Maroon 5</h1></div>
    <img src="maroon5.jpg" style="width: 100%">
    <div class="header" style="background-color: navy; text-align: center; height: 50px;"><h1 style="color: white;">Members</h1></div>
    `;

    var count = 0;
    maroon5.members.forEach((item) => {
        html += `
            <div style="display: inline-block; text-align: center;">
                <h3>${item}</h3>
                <img src="${maroon5.pictures[count]}.jpg">
            </div>
        `;
        count++;
    });

    html += `</div>
    <div class="header" style="background-color: navy; text-align: center; margin: auto; height: 50px;"><h1 style="color: white;">Albums</h1></div>
    `;

    var count = 0;
    maroon5.albums.forEach((item) => {
        html += `
            <div style="text-align: center;">
                <h3>${item}</h3>
            </div>
        `;
        count++;
    });

    html += `
    <div class="header" style="background-color: navy; text-align: center; margin: auto; height: 50px;"><h1 style="color: white;">Locations</h1></div>
    `;

    var count = 0;
    maroon5.locations.forEach((item) => {
        html += `
            <div style="text-align: center;">
                <h3>${item}</h3>
            </div>
        `;
        count++;
    });

    res.send(`${html}`);
});

module.exports = router;