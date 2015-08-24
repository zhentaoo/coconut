var article = require('../../model/index').Article;

exports.index = function (req, res, next) {
    var page = req.query.page - 1;

    article.count({}, function (err, num) {
        req.session.pageNum = parseInt(num / 20) + 1;

        article.find({}, function (err, docs) {
            if (err) {
                res.send('error');
            }
            res.send({
                session: req.session,
                docs: docs
            });
        }).skip(page * 20).limit(20);
    });
};

exports.showOneArticle = function (req, res, next) {
    article.findById(req.query.id, function (err, docs) {
        res.send({
            session: req.session,
            docs: docs
        });
    });
};