/*已连接到数据库的mongo*/
var mongo = require('../lib/mongoose.js');

/*选择表*/
var mongooseSchema = new mongo.Schema({
    name: {type: String, default: '匿名用户'},
    password: {type: String},
    email: {type: String}
});

var mongooseModel = mongo.model('user', mongooseSchema);

var UserModel = function () {
};

UserModel.prototype.save = function (params, callback) {
    /*保存文档，一条记录*/
    var doc = {name: params.name, password: params.password, email: params.email};
    var mongooseEntity = new mongooseModel(doc);
    mongooseEntity.save(function (error) {
        if (error) {
            callback(error);
        } else {
        }
    });
};

UserModel.prototype.findByEmail = function (email, callback) {
    mongooseModel.find({email: email}, function (err, docs) {
        callback(err, docs);
    });
};

/*find test*/
//mongooseModel.find({email: 'sdfxxadsf'}, function (err, docs) {
//        console.log(docs);
//    }
//);

/*save test*/
//var doc = {name: 1, password: 2, email: 3};
//var mongooseEntity = new mongooseModel(doc);
//mongooseEntity.save(function (error) {
//    if (error) {
//        console.log(error);
//    } else {
//        console.log('saved OK!');
//    }
//});

module.exports = UserModel;