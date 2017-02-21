var program = require('../model').Program;
var tag = require('../model').tag;

function rdColor() {
  var color = '';
  var rd = Math.random();
  if (rd < 0.25){
    color = 'green-tag';
  }else if (rd < 0.5){
    color = 'yellow-tag';
  }else if (rd < 0.75) {
    color = 'blue-tag';
  }else if (rd < 1) {
    color = 'my-tag';
  }
  return color;
}

exports.index = function(req, res, next) {
  var queryObj = {}
  if (req.query.tag) {
    queryObj.category = req.query.tag;
  }
  program
    .find(queryObj, function(err, docs) {
      docs.forEach(el => {
        if (el.content) {
          el.content = el.content.replace(/<[^>]+>/g,"").slice(0,300).trim();
        }
      })
      tag.find({}, function (err, tags) {
        tags.forEach(function (el) {
          el.color = rdColor();
        })
        res.render('program/index', {
          one: {title: '随笔'},
          program: docs,
          tags: tags
        });
      });
    })
    .sort({'date.updateAt': -1})
    .limit(15);
};

exports.showOneProgram = function(req, res, next) {
  program.findById(req.query.id, function(err, one) {
    tag.find({}, function (err, tags) {
      tags.forEach(function (el) {
        el.color = rdColor();
      })
      var queryObj = req.query.tag ? {category:req.query.tag} : {};
      program.find(queryObj,function (err, program) {
        res.render('program/show.ejs', {
          one: one,
          program: program,
          tags: tags
        });
      }).limit(15);;
    });

  });
};
