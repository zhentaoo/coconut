var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var session = require('express-session');
var domain = require('domain');
var ueditor = require("ueditor");

var config = require('./src/config/config.js');
require('./src/tools/string.js');
var auth = require('./src/middlewares/Auth');

/*route*/
var webRoute = require('./src/routes/webRoute');
var apiRoute = require('./src/routes/apiRoute');

/*middleware*/
var app = express();
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// ueditor 客户发起上传图片请求
app.use("/ueditor/ue", ueditor(path.join(__dirname, 'public'), function(req, res, next) {
  if(req.query.action === 'uploadimage'){

    // 这里你可以获得上传图片的信息
    var foo = req.ueditor;
    console.log(foo.filename); // exp.png
    console.log(foo.encoding); // 7bit
    console.log(foo.mimetype); // image/png

    // 下面填写你要把图片保存到的路径 （ 以 path.join(__dirname, 'public') 作为根路径）
    var img_url = '/upload/';
    res.ue_up(img_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
  }
  //  客户端发起图片列表请求
  else if (req.query.action === 'listimage'){
    var dir_url = 'your img_dir'; // 要展示给客户端的文件夹路径
    res.ue_list(dir_url) // 客户端会列出 dir_url 目录下的所有图片
  }
  // 客户端发起其它请求
  else {
    res.setHeader('Content-Type', 'application/json');
    // 这里填写 ueditor.config.json 这个文件的路径
    res.redirect('/ueditor/nodejs/config.json')
}}));

/**Third-party middleware**/
app.use(cookieParser());

app.use(session({
  secret: '123',
  name: 'N-Blog',
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
app.use(express.static(path.join(__dirname, '/public')));

/** Application-level middleware**/
/*router*/
app.use('/', webRoute);
app.use('/api', apiRoute);

/**Error-handling middleware**/
// http://expressjs.com/en/guide/using-middleware.html#middleware.error-handling
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something boom!!!')
});

/*Create HTTP server.*/
var server = http.createServer(app).listen(config.server.port, function() {
  console.log('listen:' + config.server.port);
});

/*Create socket server*/
var io = require('socket.io').listen(server);
require('./socket-server').runs(io);
