var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var session = require('express-session');
var config = require('./config/config.js');

/*route*/
var webRoute = require('./routes/webRoute');
var apiRoute = require('./routes/apiRoute');

/*middleware*/
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3035);
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

/*router*/
app.use('/', webRoute);
app.use('/api', apiRoute);

/*Create HTTP server.*/
http.createServer(app).listen(app.get('port'), function () {
    console.log('listen:' + app.get("port"));
});