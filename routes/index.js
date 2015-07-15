var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
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
    res.send(JSON.stringify(req.body));
});

router.get('/contact', function (req, res, next) {
    res.render('contact', {tittle: 'contact me'});
});

module.exports = router;
