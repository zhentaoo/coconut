var user = require('../model').User;

/*普通用户权限*/
exports.userAuth = function (req, res, next) {
    if (req.session.isAuth == 1) {
        next();
    } else {
        res.redirect('/login');
    }
};

/*管理员权限*/
exports.adminAuth = function (req, res, next) {
    if (req.session.isAuth == 2) {
        next();
    } else {
        res.redirect('/login');
    }
};
