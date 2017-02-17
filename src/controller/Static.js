exports.about = function(req, res, next) {
  res.render('about', {
    session: req.session
  });
};

exports.resource = function(req, res, next) {
  res.render('resource');
};

exports.trans = function (req, res, next) {
  console.log(req.query.name);
  if (!req.query || !req.query.name) {
    res.render('translate/pm2');
  }

  res.render('translate/' + req.query.name);
}
