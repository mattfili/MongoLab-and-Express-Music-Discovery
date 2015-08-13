var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('templates/artists');
});

router.post('/add', function (req, res) {
  var collection = global.db.collection('artists');
  console.log('req.body: ', req.body);
  collection.save(req.body, function () {
    console.log('saving req.body');
    res.redirect('/')
  });
});

module.exports = router;