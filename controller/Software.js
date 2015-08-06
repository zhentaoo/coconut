exports.index=function (req, res, next) {
    res.render('software/index', {
        session: req.session
    });
};