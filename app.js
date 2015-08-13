var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser')

if (process.env.NODE_ENV !== 'production') {
  require('./lib/secrets');
}
require(path.join(process.cwd(), './lib/mongodb'));

var routesMain = require('./routes/routes.main');
var routesArtists = require('./routes/routes.artists');

var lessCSS = require('less-middleware');

app.set('view engine', 'ejs');
app.locals.title = 'node_album';

app.use(lessCSS('public'));

app.use(bodyParser.urlencoded({
  extended : true,
  type     : '*/x-www-form-urlencoded'
}));

app.use('/', routesMain);
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