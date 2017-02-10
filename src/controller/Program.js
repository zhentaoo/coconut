var program = require('../model').Program;

exports.index = function(req, res, next) {
  program
    .find({}, function(err, docs) {
      docs.forEach(el => {
        if (el.content) {
          el.content = el.content.replace(/<[^>]+>/g,"").slice(0,300).trim();
        }
      })

      res.cookie('isVisit', 1, {maxAge: 60 * 1000});
      res.render('program/index', {
        program: docs
      });
    })
    .sort({'date.updateAt': -1})
    .limit(15);
};

exports.showOneProgram = function(req, res, next) {
  program.findById(req.query.id, function(err, docs) {
    res.render('program/show.ejs', {
      session: req.session,
      program: docs
    });
  });
};
