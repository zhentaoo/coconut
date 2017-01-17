/**
 * 移动设备的相关接口
 */
var express = require('express');
var index = require('../controller/Index');
var crawler = require('../controller/api/Crawler');
var sns = require('../controller/api/Sns');
var auth = require('../controller/api/auth');

var router = express.Router();

/*新闻*/
router.get('/crawler', crawler.index);

/*sns*/
router.get('/sns', sns.index);
router.get('/sns/Article', sns.showOneArticle);

/* auth */
router.get('/GithubAuth', auth.index);

module.exports = router;
