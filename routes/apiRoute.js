/**
 * 移动设备的相关接口
 */
var express = require('express');
var index = require('../controller/Index');
var bbs = require('../controller/Bbs');
var chat = require('../controller/Chat');
var game = require('../controller/Game');
var software = require('../controller/Software');
var user = require('../controller/User');
var auth = require('../middlewares/Auth');
var router = express.Router();


module.exports = router;
