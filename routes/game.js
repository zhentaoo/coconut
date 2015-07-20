/**
 * Created by leo on 2015/7/15.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('game/game', {
        tittle: 'CocosJS Game',
        game: [
            '捕鱼达人'
        ],
        introduce: [
            '使用cocos-js制作的小游戏，喜欢的话，多点几下呗'
        ],
        imgUrl: [
            "public/img/fishman.png"
        ],
        hrefUrl: [
            "/game/fishman"
        ]
    });
});

router.get('/fishman', function (req, res, next) {
    res.render('game/fishman', {
        tittle: 'game'
    });
});

module.exports = router;