exports.index = function (req, res, next) {
    //res.send(req.session.name);
    res.render('game/index', {
        tittle: 'CocosJS Game',
        game: [
            '捕鱼达人',
            '超人'
        ],
        introduce: [
            '使用cocos-js制作的小游戏，喜欢的话，多点几下呗<br/>第一个呕心力作，捕鱼小游戏',
            '饥饿超人这个是别人的作品，慢慢改过来，`(*∩_∩*)′'
        ],
        imgUrl: [
            "public/img/fishman.png",
            "public/img/hero.png"
        ],
        hrefUrl: [
            "/game/fishman",
            "/game/hero"
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