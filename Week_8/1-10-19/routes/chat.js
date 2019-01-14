var express = require('express');
router = express.Router();

router.get('/chat', function (req, res) {

    res.render('chat', {
        pageTitle: 'Chat',
        pageID: 'chat'
    });

});

module.exports = router;