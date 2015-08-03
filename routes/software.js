var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('chat/index', {
        session: req.session
    });
});

module.exports = router;