var article = require('../model/index').Article;

exports.index = function (req, res, next) {
    res.render('admin/index');
};
exports.manager = function (req, res, next) {
    res.render('admin/manager');
};

exports.login = function (req, res, next) {
    res.render('admin/manager');
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