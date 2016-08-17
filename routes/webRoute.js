var express = require('express');
var index = require('../controller/Index');
var app = require('../controller/App');
var sns = require('../controller/Sns');
var chat = require('../controller/Chat');
var game = require('../controller/Game');
var software = require('../controller/Software');
var crawler = require('../controller/Crawler');
var app = require('../controller/App');

var user = require('../controller/User');
var auth = require('../middlewares/Auth');
var introduce = require('../controller/Introduce');
var tools = require('../controller/Tools');
var admin = require('../controller/Admin');
var my = require('../controller/My');
var program = require('../controller/Program');
var router = express.Router();

/**Router-level middleware**/
// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
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

// app
router.get('/app/webrtc', app.index);

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

/*个人主页*/
router.get('/my', my.index);

/*技术杂谈*/
router.get('/program', program.index);
router.get('/program/one', program.showOneProgram);


/*todo:网站后台*/
router.get('/admin', admin.showLogin);
router.post('/admin/login', admin.login);

/*todo:博文修改的新增接口*/
router.get('/admin/program', auth.adminAuth, admin.programIndex);

router.get('/admin/program/add', auth.adminAuth, admin.showProgramAdd);
router.post('/admin/program/add', auth.adminAuth, admin.programAdd);

router.get('/admin/program/edit', auth.adminAuth, admin.showProgramEdit);
router.post('/admin/program/edit', auth.adminAuth, admin.programEdit);

router.get('/admin/program/delete', auth.adminAuth, admin.programDel);

/*todo:文章修改的新增接口*/
router.get('/admin/article', auth.adminAuth, admin.article);
router.get('/admin/article/edit', auth.adminAuth, admin.article);
router.get('/admin/article/add', auth.adminAuth, admin.article);
router.get('/admin/article/delete', auth.adminAuth, admin.article);

/*todo:用户管理的新增接口*/
router.get('/admin/user', auth.adminAuth, admin.user);
router.get('/admin/user/edit', auth.adminAuth, admin.user);
router.get('/admin/user/add', auth.adminAuth, admin.user);
router.get('/admin/user/delete', auth.adminAuth, admin.user);

module.exports = router;
