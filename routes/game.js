/**
 * Created by leo on 2015/7/15.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('game/game', {
        tittle: 'game',
        game1: '捕鱼达人',
        game2: '饥饿超人'
    });
});

router.get('/fishman', function (req, res, next) {
    res.render('game/fishman', {
        tittle: 'game'
    });
});

module.exports = router;