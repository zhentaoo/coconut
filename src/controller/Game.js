exports.index = function (req, res, next) {
    //res.send(req.session.name);
    res.render('game/index', {
        tittle: 'CocosJS Game',
        game: [
            '捕鱼达人'
        ],
        introduce: [
            '使用cocos-js制作的小游戏，喜欢的话，多点几下呗<br/>捕鱼小游戏'
        ],
        imgUrl: [
            "public/img/fishman.png"
        ],
        hrefUrl: [
            "/game/fishman"
        ],
        session: req.session
    });
};

exports.fishman = function (req, res, next) {
    res.render('game/fishman', {
        tittle: 'game',
        session: req.session
    });
};