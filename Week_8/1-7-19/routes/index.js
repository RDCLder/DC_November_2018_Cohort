
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send(`<img src='/background.jpg'>`);
});

module.exports = router;