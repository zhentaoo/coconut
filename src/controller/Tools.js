exports.index = function(req, res, next) {
  //res.send(req.session.name);
  res.render('tools/index', {
    session: req.session
  });
};

exports.learn = function(req, res, next) {
  res.render('learn/index', {
    session: req.session
  })
}
