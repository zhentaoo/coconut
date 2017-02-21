exports.about = function(req, res, next) {
  res.render('about', {
    one: {title: '关于'}
  });
};

exports.resource = function(req, res, next) {
  res.render('resource',{
    one: {title: '前端技能图谱'}
  });
};

exports.trans = function (req, res, next) {
  console.log(req.query.name);
  if (!req.query || !req.query.name) {
    res.render('translate/pm2',{
      one: {title: 'PM2中文文档'}
    });
  }

  res.render('translate/' + req.query.name);
}
