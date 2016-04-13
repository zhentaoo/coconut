var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var session = require('express-session');
var config = require('./config/config.js');
var domain = require('domain');

/*route*/
var webRoute = require('./routes/webRoute');
var apiRoute = require('./routes/apiRoute');

/*middleware*/
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/')));
app.use(session({
    secret: '123',
    name: 'Coconut',
    cookie: {maxAge: 600000},
    resave: false,
    saveUninitialized: true
}));

app.use(function (req, res, next) {
    var reqDomain = domain.create();
    reqDomain.on('error', function (err) {
        res.render('error');
    });
    reqDomain.run(next);
});

/*router*/
app.use('/', webRoute);
app.use('/api', apiRoute);

/*Create HTTP server.*/
var server = http.createServer(app).listen(config.server.port, function () {
    console.log('listen:' + config.server.port);
});

/*Create socket server*/
var io = require('socket.io').listen(server);
require('./tcp/server').runs(io);
