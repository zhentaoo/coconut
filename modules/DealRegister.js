/**
 * Created by leo on 2015/7/16.
 */
var UserModel = require('../model/UserModel');

var DealRegister = function () {
};

DealRegister.prototype.AddUser = function (params) {
    var user = new UserModel();
    user.save({name: params['name'], password: params['password'], email: params['email']});
};

//var a = new DealRegister();

module.exports = DealRegister;