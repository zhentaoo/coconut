exports.index = function(req, res, next) {
  res.redirect('/program');
};

exports.error = function(req, res, next) {
  res.render('error');
};

exports.showLogin = function(req, res, next) {
  res.render('login', {
    message: req.session.message,
    session: req.session
  });
};

exports.login = function(req, res, next) {
  var password = req.body.password;
  var email = req.body.email;

  var crypto = require('crypto');
  var shasum = crypto.createHash('sha1');
  shasum.update(password);
  var pass = shasum.digest('hex');

  var user = require('../model/index').User;
  user.findOne({
    email: email
  }, function(err, docs) {
    if (err) {
      res.redirect('404');
    } else {
      if (!docs) {
        req.session.message = '<br><br><font color="red">用户未注册</font><br>';
        res.redirect('/login');
      }

      var time = new Date(parseInt(docs.time)).toLocaleString();
      if (pass == docs.password) {
        req.session.name = docs.name;
        req.session.email = docs.email;
        req.session.isAuth = 1;
        req.session.time = docs.time;
        req.session.id = docs._id;
        req.session.follower = docs.follower;
        res.redirect('/program');
      } else {
        req.session.message = '<br><br><font color="red">用户名或密码错误,请重新登录</font><br>';
        res.redirect('/login');
      }
    }
  });
};

exports.showRegist = function(req, res, next) {
  res.render('register', {
    tittle: '注册',
    session: req.session
  });
};

exports.regist = function(req, res, next) {
  var name = req.body.name;
  var password = req.body.password;
  var email = req.body.email;

  var user = require('../model/index').User;

  var crypto = require('crypto');
  var shasum = crypto.createHash('sha1');
  shasum.update(password);
  var pass = shasum.digest('hex');

  user.find({
    'email': email
  }, function(err, docs) {
    if (docs.length == 0) {

      user.create({
        name: name,
        email: email,
        password: pass
      }, function(err, docs) {
        req.session.message = '<br><br><font color="green">注册成功,请登录</font><br>';
        res.redirect('/login');
        //res.render('register', {
        //    tittle: '注册',
        //    session: req.session
        //});
      });
    } else {
      req.session.message = '<br><br><font color="red">该邮箱已注册过，请重试</font><br>';
      res.render('register', {
        tittle: '注册',
        session: req.session
      });
    }
  });

};

exports.logout = function(req, res, next) {
  req.session.destroy();
  res.redirect('/program');
};
