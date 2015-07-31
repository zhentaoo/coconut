var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');

var routes = require('./routes/index');
var users = require('./routes/users');
var game = require('./routes/game');
var bbs=require('./routes/bbs');

var session = require('express-session');
//var auth = require('./modules/Auth.js');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3035);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

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

//app.use(session({
//    secret: '12345',
//    name: 'testapp',
//    cookie: {maxAge: 80000},
//    resave: false,
//    saveUninitialized: true,
//    store: new MongoStore({   //创建新的mongodb数据库
//        host: 'localhost',    //数据库的地址，本机的话就是127.0.0.1，也可以是网络主机
//        port: 27017,          //数据库的端口号
//        db: 'coconut'        //数据库的名称。
//    })
//}));

app.use('/', routes);
app.use('/users', users);
app.use('/game', game);
app.use('/bbs',bbs);

app.get('/session', function (req, res, next) {
    req.session.name = '2';
    console.log(session.name);
});

/**
 * Create HTTP server.
 */
http.createServer(app).listen(app.get('port'), function () {
    console.log('listen:' + app.get("port"));
});