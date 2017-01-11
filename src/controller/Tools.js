exports.index = function (req, res, next) {
    //res.send(req.session.name);
    res.render('tools/index', {
        session: req.session
    });
};
