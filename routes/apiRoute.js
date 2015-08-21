/**
 * 移动设备的相关接口
 */
var express = require('express');
var index = require('../controller/Index');
var crawler = require('../controller/api/Crawler');


var router = express.Router();

/*新闻*/
router.get('/crawler', crawler.index);


module.exports = router;
