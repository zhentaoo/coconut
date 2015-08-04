exports.index=function (req, res, next) {
    res.render('chat/index', {
        session: req.session
    });
};