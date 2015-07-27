var UserModel = require('../model/UserModel');

var DealRegister = function () {
};
var user = new UserModel();

DealRegister.prototype.AddUser = function (params, callback) {
    user.findByEmail(params.email, function (err, docs) {
        if (docs.length == 0) {
            user.save({
                name: params.name,
                password: params.password,
                email: params.email
            }, function (data) {
                console.log(data);
                callback(1);
            });
        } else {
            callback(0);
        }
    });
};

module.exports = DealRegister;