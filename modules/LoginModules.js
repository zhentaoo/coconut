/**
 * Created by leo on 2015/7/18.
 */
var UserModel = require('../model/UserModel');

var user = new UserModel();

var LoginModules = function () {

};

LoginModules.prototype.login = function (email, password, callback) {
    user.findByEmail(email, function (err, docs) {
        if (docs.length == 0) {
            var psw = docs.password;
            if (psw == password) {
                //登录成功
                callback(1, docs);
            }
            else {
                //用户名或密码错误
                callback(0, docs);
            }
        } else {
            //用户未注册
            callback('not register', docs);
        }
    })
};

module.exports = LoginModules;