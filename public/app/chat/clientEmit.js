$(function () {
    var url = window.location.host;
    var socket = io.connect(url);

    setTimeout(function () {
      socket.emit('join', loginName);

      $('#publicSay').submit(function () {
          var content = $('#publicSayContent').val();
          socket.emit('publicSay', content);
          $('#publicSayContent').val('');
          return false;
      });

      if (window.location.pathname == '/chat/privateChat') {
          console.log('privateChat');
          var id = GetQueryString("id");
          console.log(id);
          socket.emit('join private room', id);
      }

      $('#privateSay').submit(function () {
          var content = $("#mySay").val();
          socket.emit('privateSay', content);
          $('#mySay').val(' ');
          return false;
      });
    },3500);
});


function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)return unescape(r[2]);
    return null;
}
