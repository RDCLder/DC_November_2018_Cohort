
const express = require('express');
const router = express.Router();
var data = require('../data/data.json')

router.get('/imaginedragons', (req, res)=>{

    var imaginedragons = data.imaginedragons;
    var html = `
    <div class="header" style="background-color: navy; text-align: center; height: 50px;"><h1 style="color: white;">Imagine Dragons</h1></div>
    <img src="imaginedragons.jpg" style="width: 100%">
    <div class="header" style="background-color: navy; text-align: center; height: 50px;"><h1 style="color: white;">Members</h1></div>
    `;

    var count = 0;
    imaginedragons.members.forEach((item) => {
        html += `
            <div style="display: inline-block; text-align: center;">
                <h3>${item}</h3>
                <img src="${imaginedragons.pictures[count]}.jpg">
            </div>
        `;
        count++;
    });

    html += `</div>
    <div class="header" style="background-color: navy; text-align: center; margin: auto; height: 50px;"><h1 style="color: white;">Albums</h1></div>
    `;

    var count = 0;
    imaginedragons.albums.forEach((item) => {
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
    imaginedragons.locations.forEach((item) => {
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