var request = require('request');

exports.index = function (req, res, next) {
    // console.log(res);
    console.log(req.query);

    var url = 'https://github.com/login/oauth/access_token';
    var code = req.query.code;
    var client_id = 'cd4237027fe35177c068';
    var client_secret = "aadd141c2d7b2187121159985eab6586bdccf67b";

    request.post({
        url:url,
        formData: {
          code: code,
          client_id: client_id,
          client_secret: client_secret
        }
      },function (err, res ,body) {
        res.cookie('github',{code: code, userinfo: body });
      })

  };
