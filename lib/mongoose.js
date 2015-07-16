var mongoose = require('mongoose');
var config = require('../config/db.js');

var url = 'mongodb://' + config.db.host + ":" + config.db.port + "/" + config.db.dbname;
var mongo = mongoose.connect(url);

module.exports = mongo;