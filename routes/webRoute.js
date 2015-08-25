var express = require('express');
var index = require('../controller/Index');
var sns = require('../controller/Sns');
var chat = require('../controller/Chat');
var game = require('../controller/Game');
var software = require('../controller/Software');
var crawler = require('../controller/Crawler');

var user = require('../controller/User');
var auth = require('../middlewares/Auth');
var introduce = require('../controller/Introduce');
var tools = require('../controller/Tools');
var admin=require('../controller/admin');

var router = express.Router();

/*主页index*/
router.get('/', index.index);
router.get('/error', index.error);
router.get('/login', index.showLogin);
router.post('/login', index.login);
router.get('/register', index.showRegist);
router.post('/register', index.regist);
router.get('/logout', index.logout);

/*问答*/
router.get('/sns', sns.index);
router.get('/sns/sendArticle', auth.userAuth, sns.showSendArticle);
router.post('/sns/sendArticle', auth.userAuth, sns.sendArticle);
router.get('/sns/Article', sns.showOneArticle);

/*聊天*/
router.get('/chat', chat.index);
router.post('/chat/createRoom', chat.createRoom);
router.get('/chat/privateChat', auth.userAuth, chat.privateChat);

/*游戏*/
router.get('/game', game.index);
router.get('/game/fishman', game.fishman);

/*软件*/
router.get('/software', software.index);

/*新闻*/
router.get('/crawler', crawler.index);

/*网站介绍*/
router.get('/introduce', introduce.index);

/*用户*/
router.get('/user', user.index);

/*工具集合*/
router.get('/tools', tools.index);

/*网站后台*/
router.get('/admin',admin.index);
router.post('/admin/login',admin.login);
router.get('/admin/manager',admin.manager);

module.exports = router;
