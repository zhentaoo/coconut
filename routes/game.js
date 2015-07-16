/**
 * Created by leo on 2015/7/15.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('game/game', {
        tittle: 'CocosJS Game',
        game1: '捕鱼达人',
        introduce1: '使用cocos-js制作的小游戏，喜欢的话，多点几下呗',
        game2: '饥饿超人',
        introduce2:'这个是完全抄的 ，不敢放'
    });
});

router.get('/fishman', function (req, res, next) {
    res.render('game/fishman', {
        tittle: 'game'
    });
});

module.exports = router;