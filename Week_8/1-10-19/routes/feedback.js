var express = require('express');
const body_parser = require('body-parser');

var router = express.Router();
var data = require('../data/feedback.json');

router.get('/feedback', function (req, res) {
  res.render('feedback', {
    pageTitle: 'Feedback',
    pageID: 'feedback'
  });
});

router.use(body_parser.urlencoded({ extended: false }));
router.post('/feedback', (req, res) => {
  console.log(req.body);
  res.send('Form data received!')
})

router.get('/api', (req, res) => {
  res.json(data);
})

module.exports = router;