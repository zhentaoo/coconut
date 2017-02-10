/**
 * 移动设备的相关接口
 */
var express = require('express');
var program = require('../controller/api/program');

var router = express.Router();

/* 博文 */
router.get('/program', program.index);
router.get('/oneProgram', program.showOneProgram);

module.exports = router;
