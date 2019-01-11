const express = require('express');
const router = express.Router();
var data = require('../data/data.json')

router.get('/onerepublic', (req, res)=>{

    var onerepublic = data.onerepublic;
    res.render("layout", {
        band: onerepublic.band,
        members: onerepublic.members,
        pictures: onerepublic.pictures,
        albums: onerepublic.albums,
        locations: onerepublic.locations,
        picturesPath: onerepublic.picturesPath
    });
    
});

module.exports = router;