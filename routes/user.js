var express = require('express');
var router = express.Router();

var User = require('../model/User')

router.get('/new', function newUser(req, res) {
// registration page
	res.render('user/new');

});

router.post('/', function createUser(req, res) {
// perform the registration
	console.log(req.body)
	User.create(req.body, function() {
		if (err) {
			res.redirect('user/new', {err:err});
		} else {
			res.redirect('/')
		}
	});

});







module.exports = router;