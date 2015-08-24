/**
 * 移动设备的相关接口
 */
var express = require('express');
var index = require('../controller/Index');
var crawler = require('../controller/api/Crawler');
var bbs = require('../controller/api/Bbs');

var router = express.Router();

/*新闻*/
router.get('/crawler', crawler.index);
/*bbs*/
router.get('/bbs', bbs.index);
router.get('/bbs/Article', bbs.showOneArticle);

module.exports = router;
