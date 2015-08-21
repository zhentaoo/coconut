var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var iconv = require('iconv-lite');

exports.index = function (req, res, next) {
    var target = null;
    if (req.query.searchId) {
        target = req.query.searchId;
    } else {
        target = "http://www.ifeng.com/";
    }

    request(target, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var str = iconv.encode(body, 'utf8');
            $ = cheerio.load(str);

            var docs = {};
            docs.title = [];
            docs.content = [];
            docs.content2 = [];
            docs.content3 = [];
            docs.imgUrl = [];
            var length = $('h1').length;
            for (var i = 0; i < length; i++) {
                docs.title[i] = $('h1 a').eq(i).text();
                docs.content[i] = $('h1 a').eq(i).attr('href');
            }

            length = $('h2').length;
            for (i = 0; i < length; i++) {
                docs.content2[i] = $('h2 a').eq(i).attr('href');
            }

            length = $('h3').length;
            for (i = 0; i < length; i++) {
                docs.content3[i] = $('h3 a').eq(i).attr('href');
            }

            length = $('img').length;
            for (i = 0; i < length; i++) {
                docs.imgUrl[i] = $('img').eq(i).attr('src');
            }

            res.send({
                docs: docs
            });
        }
    });
};
