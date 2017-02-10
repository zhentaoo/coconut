var user = require('../model').User;

/*管理员权限*/
exports.adminAuth = function(req, res, next) {
  if (req.session.isAuth == 2) {
    next();
  } else {
    res.redirect('/admin');
  }
};
