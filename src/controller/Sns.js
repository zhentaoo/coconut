var article = require('../model/index').Article;

exports.index = function(req, res, next) {
  var page = req.query.page - 1;

  article.count({}, function(err, num) {
    req.session.pageNum = parseInt(num / 20) + 1;

    article.find({}, function(err, docs) {
      if (err) {
        res.redirect('/error');
      }
      docs.forEach(el => {
        if (el.content) {
          el.content = el.content.replace(/<[^>]+>/g,"").slice(0,400).trim();
        }
      })

      res.render('sns/index', {
        session: req.session,
        docs: docs
      });
    }).skip(page * 20).limit(20);
  });
};

exports.showSendArticle = function(req, res, next) {
  res.render('sns/article/index', {
    session: req.session
  });
};

exports.sendArticle = function(req, res, next) {
  article.create({
    title: req.body.title,
    content: req.body.content,
    author: req.session.name
  }, function() {
    res.redirect('/sns');
  });
};

exports.showOneArticle = function(req, res, next) {
  article.findById(req.query.id, function(err, docs) {
    res.render('sns/article/oneArticle', {
      session: req.session,
      docs: docs
    });
  });
};
