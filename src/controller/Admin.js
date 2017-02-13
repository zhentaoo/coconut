var article = require('../model/index').Article;
var program = require('../model/index').Program;
var tag = require('../model/index').tag;

exports.showLogin = function(req, res, next) {
  res.render('admin/login.ejs');
};

exports.login = function(req, res, next) {
  console.log(req.body.password);
  console.log(req.body.name);
  if (req.body.password == "123456" && req.body.name == 'leo') {
    req.session.isAuth = 2;
    res.redirect('/admin/program');
  } else {
    res.redirect('/admin');
  }
};

exports.programIndex = function(req, res, next) {
  program.find({}, function(err, docs) {
    console.log(docs);
    res.render('admin/content/program/index', {
      docs: docs,
      session: req.session
    });
  });
};

exports.showProgramEdit = function(req, res, next) {
  program.find({
    _id: req.query._id
  }, function(err, program) {
    console.log('program edit:', program);

    res.render('admin/content/program/edit', {
      session: req.session,
      program: program
    });
  });
};

exports.programEdit = function(req, res, next) {
  res.redirect('/admin/program');
  var title = req.body.title;
  var content = req.body.content;
  var category = req.body.category;
  var _id = req.body._id;
  program.findOneAndUpdate({
      _id: _id
    }, {
      content: content,
      title: title,
      category: category
    },
    function(err, result) {
      console.log(result);
    }
  )
};

exports.showProgramAdd = function(req, res, next) {
  res.render('admin/content/program/add', {
    session: req.program
  });
};

exports.programAdd = function(req, res, next) {
  var title = req.body.title;
  var content = req.body.content;
  var category = req.body.category;

  program.create({
    category: category,
    content: content,
    title: title
  }, function() {
    res.redirect('/admin/program');
  });
};

exports.programDel = function(req, res, next) {
  var _id = req.query.id;
  program.remove({
    "_id": _id
  }, function(err) {
    res.redirect('/admin/program');
  });
};

/* tag */
exports.showTags = function(req, res, next) {
  tag.find({}, function(err, tags) {
    res.render('admin/content/tag', {
      tags: tags
    });
  });
}

exports.showAddTags = function(req, res, next) {
  var name = req.body.name;
  res.render('admin/content/tag/add');
}

exports.addTags = function(req, res, next) {
  var tagname = req.body.name;
  console.log(tagname);
  tag.create({
    name: tagname
  }, function() {
    res.redirect('/admin/tag');
  })
}
