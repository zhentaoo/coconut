var article = require('../model/index').Article;
var program = require('../model/index').Program;

exports.index = function (req, res, next) {
    program.find({}, function (err, data) {
        console.log(data);
        res.render('admin/index', data);
    });
};

exports.program = function (req, res, next) {
    res.render('admin/content/program/index');
};


exports.showProgramEdit = function (req, res, next) {
    res.render('admin/content/program/edit');
};

exports.programEdit = function (req, res, next) {
    var title=req.body.title;
    var content=req.body.content;



    res.render('admin/content/program/edit');
};


exports.programAdd = function (req, res, next) {
    res.render('admin/content/program/add');
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
        req.session.isAuth = 2;
        res.redirect('/admin/program');
    } else {
        res.redirect('/admin');
    }
};