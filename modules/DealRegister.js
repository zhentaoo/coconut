var UserModel = require('../model/UserModel');

var DealRegister = function () {
};
var user = new UserModel();

DealRegister.prototype.AddUser = function (params) {
    var ok = 0;
    ok = this.isRegister();
    if (ok) {
        user.save({name: params['name'], password: params['password'], email: params['email']});
    } else {
    }
};

DealRegister.prototype.isRegister = function (params) {
    var name = params.name;
    var password = params.password;
    var email = params.email;
    user.find({email: params.email});
};

module.exports = DealRegister;