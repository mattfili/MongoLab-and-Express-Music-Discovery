var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID

router.get('/', function (req, res) {
  var collection = global.db.collection('artists');
  collection.find().toArray(function(err, artists) {
    console.log("err: ", err);
    console.log(artists)
    res.render('templates/index', {artists: artists});
  });
});

router.post('/:id', function (req, res) {
  var collection = global.db.collection('artists');

  collection.remove({_id: ObjectID(req.params.id)}, true)

});

module.exports = router;