var article = require('../model/index').Article;

exports.index = function (req, res, next) {
    res.render('admin/index');
};
exports.program = function (req, res, next) {
    res.render('admin/content/program/index');
};

exports.user = function (req, res, next) {
    res.render('admin/content/user/index');
};

exports.article = function (req, res, next) {
    res.render('admin/content/article/index');
};

exports.login = function (req, res, next) {
    console.log(req.body.password);
    console.log(req.body.name);
    if (req.body.password == "123456" && req.body.name == 'leo') {
        res.redirect('/admin/program');
    } else {
        res.redirect('/admin');
    }
    //var password = req.body.password;
    //var email = req.body.email;
    //var user = require('../model/index').User;
    //user.findOne({email: email}, function (err, docs) {
    //    if (err) {
    //        res.redirect('404');
    //    } else {
    //        if (!docs) {
    //            req.session.message = '<br><br><font color="red">用户未注册</font><br>';
    //            res.redirect('/register');
    //        }
    //
    //        var time = new Date(parseInt(docs.time)).toLocaleString();
    //        if (password == docs.password) {
    //            req.session.name = docs.name;
    //            req.session.email = docs.email;
    //            req.session.isAuth = 1;
    //            req.session.time = time;
    //            req.session.id = docs._id;
    //            req.session.follower = docs.follower;
    //            res.redirect('/sns');
    //        } else {
    //            req.session.message = '<br><br><font color="red">用户名或密码错误,请重新登录</font><br>';
    //            res.redirect('/login');
    //        }
    //    }
    //});
};