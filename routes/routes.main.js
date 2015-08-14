var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID

router.get('/', function (req, res) {
  var collection = global.db.collection('artists');
  collection.find().toArray(function(err, artists) {
    console.log("err: ", err);
    res.render('templates/index', {artists: artists});
  });
});

router.post('/:id/delete', function (req, res) {
  var collection = global.db.collection('artists');
  collection.remove({_id: ObjectId(req.params.id)})
	res.redirect('/')

});

module.exports = router;