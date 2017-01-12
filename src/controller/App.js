exports.index = function(req, res, next) {
  res.render('webrtc/index', {
    session: req.session
  });
};
