var express = require('express');
var router = express.Router();

router.post('/add', function (req, res) {
  var collection = global.db.collection('artists');
  collection.save(req.body, function () {
    console.log('saving req.body');
    res.redirect('/')
  });
});

module.exports = router;