var article = require('../model/index').Article;
var program = require('../model/index').Program;

/*后台首页:登录*/
exports.showLogin = function (req, res, next) {
    res.render('admin/login.ejs');
};

exports.login = function (req, res, next) {
    console.log(req.body.password);
    console.log(req.body.name);
    if (req.body.password == "123456" && req.body.name == 'leo') {
        req.session.isAuth = 2;
        res.redirect('/admin/program');
    } else {
        res.redirect('/admin');
    }
};

/*编程博文相关：增删改查*/
exports.programIndex = function (req, res, next) {
    program.find({}, function (err, docs) {
        console.log(docs);
        res.render('admin/content/program/index', {
            docs: docs,
            session: req.session
        });
    });
};

exports.showProgramEdit = function (req, res, next) {
    res.render('admin/content/program/edit');
};

exports.programEdit = function (req, res, next) {
    res.redirect('/admin/program');
};

exports.showProgramAdd = function (req, res, next) {
    console.log(req.program);
    res.render('admin/content/program/add', {
        session: req.program
    });
};
exports.programAdd = function (req, res, next) {
    var title = req.body.title;
    var content = req.body.content;
    program.create({
        title: title,
        content: content
    }, function (err, docs) {
        req.program = docs;
        res.redirect('/admin/program');
    });
};

exports.programDel = function (req, res, next) {
    var _id = req.query.id;
    program.remove({
        "_id": _id
    }, function (err) {
        res.redirect('/admin/program');
    });
};

/*用户管理：增删改查*/
exports.user = function (req, res, next) {
    res.render('admin/content/user/index');
};

exports.article = function (req, res, next) {
    res.render('admin/content/article/index');
};