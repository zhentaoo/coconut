exports.index = function (req, res, next) {
    res.send('respond with a resource', {
        session: req.session
    });
};