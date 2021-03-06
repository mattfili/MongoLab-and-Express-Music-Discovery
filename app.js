var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');


if (process.env.NODE_ENV !== 'production') {
  require('./lib/secrets');
}
require(path.join(process.cwd(), './lib/mongodb'));

var routesMain = require('./routes/routes.main');
var routesArtists = require('./routes/routes.artists');
var user = require('./routes/user')

var lessCSS = require('less-middleware');

app.set('view engine', 'ejs');
app.locals.title = 'node_album';

app.use(lessCSS('public'));

app.use(session({
  secret: 'musicandauth',
  resave: false,
  saveUninitialized: true
}))


app.use(bodyParser.urlencoded({
  extended : true,
  type     : '*/x-www-form-urlencoded'
}));

app.use('/user', user)
app.use('/', routesMain);
app.use(express.static('public'))
app.use(express.static('www'))

app.use(function requireAuth(req, res, next) {
  if (req.session.userId) {
    next();
  } else {
    res.redirect('/user/login')
  }
})


app.use('/artist', routesArtists);



app.use(function (req, res) {
  // 400s before 500s
  res.status(403);
  res.send('Unauthorized');
});

app.use(function (err, req, res, next) {
  // 500s after 400s
  console.log('err.stack', err.stack);
  res.status(500).send('My Bad');
});

var port = process.env.PORT || 3000;

  var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%d', host, port);
});

// delete function 
// searching and retrieving data
// adding CSS partials / JS to a file