var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  var collection = global.db.collection('artists');
  collection.find().toArray(function(err, artists) {
    console.log("err: ", err);
    res.render('templates/index', {artists: artists});
  });
});

// router.get('/', function (req, res) {
// 	var collection = global.db.collection('artists');
// 	collection.remove()
// })

module.exports = router;