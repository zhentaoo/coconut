var express = require('express');
var index = require('../controller/Index');
var chat = require('../controller/Chat');
var auth = require('../middlewares/Auth');
var admin = require('../controller/Admin');
var program = require('../controller/Program');
var router = express.Router();

/**Router-level middleware**/
// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
/*主页index*/
router.get('/', program.index);
router.get('/error', index.error);
router.get('/login', index.showLogin);
router.post('/login', index.login);
router.get('/register', index.showRegist);
router.post('/register', index.regist);
router.get('/logout', index.logout);
router.get('/about', index.about);

/*聊天*/
router.get('/chat', chat.index);
router.post('/chat/createRoom', chat.createRoom);
// router.get('/chat/privateChat', auth.userAuth, chat.privateChat);

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

/*todo:博文分类*/
router.get('/admin/tag',auth.adminAuth,admin.showTags);
router.get('/admin/tag/add',auth.adminAuth,admin.showAddTags);
router.post('/admin/tag/add',auth.adminAuth,admin.addTags);
router.get('/admin/tag/edit',auth.adminAuth);
router.get('/admin/tag/delete',auth.adminAuth);

module.exports = router;
