var express = require('express');
var router = express.Router();

var User = require('../model/User')

router.get('/login', function loginUser(req, res) {
// Login
	res.render('user/login');

});

router.post('/login', function doLogin(req, res) {
	User.login(req.body, function(err, user) {
		console.log(err, user);
		res.redirect('/user/login');
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