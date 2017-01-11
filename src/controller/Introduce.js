exports.index = function (req, res, next) {
    //res.send(req.session.name);
    res.render('introduce/index', {
        session: req.session
    });
};
