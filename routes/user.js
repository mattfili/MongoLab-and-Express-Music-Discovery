var express = require('express');
var router = express.Router();

var User = require('../model/User')

router.get('/login', function loginUser(req, res) {
// Login
	res.render('user/login');

});

router.post('/login', function doLogin(req, res) {
	User.login(req.body, function(err, user) {
		req.session.regenerate(function () {
			req.session.userId = user._id;
			res.redirect('/');
		})
		console.log(err, user);
	});
});

router.get('/new', function newUser(req, res) {
// registration page
	res.render('user/new');

});

router.post('/', function createUser(req, res) {
// perform the registration
	console.log(req.body)
	User.create(req.body, function(err) {
		if (err) {
			res.render('user/new')
		} else {
			res.redirect('/')
		}
	});

});







module.exports = router;