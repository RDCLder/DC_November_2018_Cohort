
const express = require('express');
const router = express.Router();
var data = require('../data/data.json')

router.get('/coldplay', (req, res)=>{

    var coldplay = data.coldplay;
    res.render("layout", {
        band: coldplay.band,
        members: coldplay.members,
        pictures: coldplay.pictures,
        albums: coldplay.albums,
        locations: coldplay.locations,
        picturesPath: coldplay.picturesPath
    });
    
});

module.exports = router;