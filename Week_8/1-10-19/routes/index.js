
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render(`index`, {
        pageTitle: "Battle of the Bands",
        pageID: "index"
    });
});

module.exports = router;