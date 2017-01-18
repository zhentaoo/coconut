var request = require('request');
/**
 * 1.用户点击页面的github登录并接受之后，
 * github调用 我的api：http://www.zhentaoo.com/api/GithubAuth?code=69f2f17fb85c73dc9c40
 * github会把用户的code给我们
 *
 * 2.我们使用该 code，和app的client_id,client_secret
 * 调用https://github.com/login/oauth/access_token接口
 * 最终获取access_token
 *
 * 3.使用access_token
 *  调用github api：https://api.github.com/user?access_token=2a02b41b5e66b214cc9f5e2b4387f3268c8518bf
 *  获取用户公共信息
 *
 * 4.把用户信息写入cookie
 */
exports.index = function (req, res, next) {
    // github调用我的接口给我用户code
    console.log('code:', req.query.code);

    var url = 'https://github.com/login/oauth/access_token';
    var code = req.query.code;
    var client_id = 'cd4237027fe35177c068';
    var client_secret = "aadd141c2d7b2187121159985eab6586bdccf67b";
    // 我调用github接口获取access_token
    request.post({
        headers: {
          'Accept': 'application/json'
        },
        url:url,
        formData: {
          code: code,
          client_id: client_id,
          client_secret: client_secret
        }
      },
      function (err, response ,body) {
        console.log('body:',body);
        console.log('type:',typeof body);
        var access_token = JSON.parse(body).access_token;
        // var access_token = querystring.parse(body).access_token;
        console.log('access_token:', 'https://api.github.com/user?access_token='+access_token);
        // 我调用github接口获取userInfo
        request.get({
          headers: {
            'User-Agent': 'request',
          },
          url: 'https://api.github.com/user?access_token='+access_token
        },
          function (error, response, body) {
            console.log('userinfo:', body);
            res.cookie('github',{code: code, userinfo: body }, {maxAge: 60 * 10000});
            res.redirect('/program');
          }
        )

      })

  };

  exports.weibo = function (req, res, next) {

  }
