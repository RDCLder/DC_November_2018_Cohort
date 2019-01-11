const express = require('express');
const router = express.Router();
var data = require('../data/data.json')

router.get('/imaginedragons', (req, res)=>{

    var imaginedragons = data.imaginedragons;
    res.render("layout", {
        band: imaginedragons.band,
        members: imaginedragons.members,
        pictures: imaginedragons.pictures,
        albums: imaginedragons.albums,
        locations: imaginedragons.locations,
        picturesPath: imaginedragons.picturesPath,
        pageTitle: "Imagine Dragons",
        pageID: "imaginedragons"
    });
    
});

module.exports = router;