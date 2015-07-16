var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.redirect('/game');
});

router.get('/introduce', function (req, res, next) {
    res.render('introduce', {
        tittle: [],
        introduce: [
            '阿桑地方',
            '啊的说法撒点粉',
            '撒旦法时代',
            '许昌县从',
            '撒发生地方',
            '现场直播V下次V吧',
            '撒点粉为人父',
            '啊的说法分',
            '时代发生地方规范',
            '从vbs地方',
            '文认为'
        ]
    });
});

router.get('/contact', function (req, res, next) {
    res.render('contact', {
        tittle: 'contact me',
        imgUrl: "/img/weixin.png",
        content: [
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf",
            "sdfasdfasdfadf"
        ]
    });
});


router.get('/login', function (req, res, next) {
    res.render('login', {tittle: 'Login'});
});

router.post('/login', function (req, res, next) {
    console.log(req.body);
    var name = req.body.name;
    var psw = req.body.psw;

    if (name == 'leo' && psw == '123') {
        res.send(JSON.stringify(req.body));
    } else {
        res.redirect('/login');
    }
});

router.get('/register', function (req, res, next) {
    res.render('register', {tittle: 'register'});
});

router.post('/register', function (req, res, next) {
    var name = req.body.name;
    var password = req.body.password;
    var email = req.body.email;

    var register = require('../modules/DealRegister');
    var registerModel = new register();
    registerModel.AddUser({name: name, password: password, email: email});
    res.send(JSON.stringify(req.body) + "register ok");
});

module.exports = router;
