exports.index = function (req, res, next) {
    res.render('bbs/', {
        session: req.session
    });
};

exports.showSendArticle = function (req, res, next) {
    res.render('bbs/article/index', {
        session: req.session
    });
};

exports.sendArticle = function (req, res, next) {
    console.log(req.body.content + req.body.title);
    var article = require('../model/index').Article;
    console.log(req.session.name);
    article.create({
        title: req.body.title,
        content: req.body.content,
        author: req.session.name
    }, function () {
        res.redirect('/bbs');
    });
};