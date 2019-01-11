const express = require('express');
const router = express.Router();
var data = require('../data/data.json')

router.get('/maroon5', (req, res)=>{

    var maroon5 = data.maroon5;
    res.render("layout", {
        band: maroon5.band,
        members: maroon5.members,
        pictures: maroon5.pictures,
        albums: maroon5.albums,
        locations: maroon5.locations,
        picturesPath: maroon5.picturesPath,
        pageTitle: "Maroon 5",
        pageID: "maroon5"
    });
    
});

module.exports = router;