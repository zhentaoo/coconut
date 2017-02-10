/**
 * Schema、Model、Entity的关系请牢记，
 * Schema生成Model，Model创造Entity，
 * Model和Entity都可对数据库操作造成影响，
 * 但Model比Entity更具操作性。
 * */

/*
 var tank = mongoose.model('Tank', yourSchema);

 tank.create({ size: 'small' }, function (err, small) {
 if (err) return handleError(err);
 // saved!
 })

 tank.remove({ size: 'large' }, function (err) {
 if (err) return handleError(err);
 // removed!
 });

 tank.findOneAndUpdate(query, { name: 'jason borne' }, options, callback)

 tank.findOne({ name: 'borne' }, function (err, doc) {
 if (err) ..
 doc.name = 'jason borne';
 doc.save(callback);
 })
 */

var mongoose = require('mongoose');
var config = require('../config/config.js');

var url = config.db.host + config.db.dbname;
console.log(url);

mongoose.connect(url, function(err) {
  if (err) {
    console.error('connect to %s error: ', url, err.message);
    process.exit(1);
  }
});

//mongoose.on('error', console.error.bind(console, '连接错误'));

require('./ChatRoom');
require('./Program');
require('./tag');

exports.Program = mongoose.model('Program');
exports.ChatRoom = mongoose.model('ChatRoom');
exports.tag = mongoose.model('tag');
