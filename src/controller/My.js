var article = require('../model/index').User;

exports.index = function (req, res, next) {
    var page = req.query.page - 1;

    article.count({}, function (err, num) {
        req.session.pageNum = parseInt(num / 20) + 1;

        article.find({}, function (err, docs) {
            if (err) {
                res.redirect('/error');
            }
            res.render('sns/index', {
                session: req.session,
                docs: docs
            });
        }).skip(page * 20).limit(20);
    });
};
