var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var session = require('express-session');
var domain = require('domain');

var config = require('./src/config/config.js');
require('./src/tools/string.js');

/*route*/
var webRoute = require('./src/routes/webRoute');
var apiRoute = require('./src/routes/apiRoute');

/*middleware*/
var app = express();
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

/**Third-party middleware**/
app.use(cookieParser());

app.use(session({
  secret: '123',
  name: 'Coconut',
  cookie: {
    maxAge: 1000000
  },
  resave: false,
  saveUninitialized: true
}));

app.use(function(req, res, next) {
  var reqDomain = domain.create();
  reqDomain.on('error', function(err) {
    res.render('error');
  });
  reqDomain.run(next);
});

/**Built-in middleware**/
app.use(express.static(path.join(__dirname, '/')));

/** Application-level middleware**/
/*router*/
app.use('/', webRoute);
app.use('/api', apiRoute);

/**Error-handling middleware**/
// http://expressjs.com/en/guide/using-middleware.html#middleware.error-handling
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something boom!!!')
})


/*Create HTTP server.*/
var server = http.createServer(app).listen(config.server.port, function() {
  console.log('listen:' + config.server.port);
});

/*Create socket server*/
var io = require('socket.io').listen(server);
require('./app/TCP/server').runs(io);
