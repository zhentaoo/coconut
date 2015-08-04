var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('bbs/', {
        session: req.session
    });
});

router.get('/sendArticle', function (req, res, next) {
    res.render('bbs/article/index', {
        session: req.session
    });
});

router.post('/sendArticle', function (req, res, next) {
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
});

module.exports = router;