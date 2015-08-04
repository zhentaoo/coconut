var article = require('../model/index').Article;

exports.index = function (req, res, next) {
    var page = req.query.page - 1;

    article.count({}, function (err, num) {
        req.session.pageNum = parseInt(num / 20) + 1;

        article.find({}, function (err, docs) {
            if (err) {
                res.redirect('/error');
            }
            res.render('bbs/index', {
                session: req.session,
                docs: docs
            });
        }).skip(page * 20).limit(20);
    });
};

exports.showSendArticle = function (req, res, next) {
    res.render('bbs/article/index', {
        session: req.session
    });
};

exports.sendArticle = function (req, res, next) {
    article.create({
        title: req.body.title,
        content: req.body.content,
        author: req.session.name
    }, function () {
        res.redirect('/bbs');
    });
};

exports.showOneArticle = function (req, res, next) {
    console.log(req.query.id);
    article.findById(req.query.id, function (err, docs) {
        console.log(docs);
        res.render('bbs/article/oneArticle', {
            session: req.session,
            docs: docs
        });
    });
};