$(function () {
    var socket = io.connect('http://localhost:3035');
    /*客户端登录*/
    socket.emit('join', $("#userName").text());

    /*公共聊天室*/
    $('#publicSay').submit(function () {
        var content = $('#publicSayContent').val();
        socket.emit('publicSay', content);
        return false;
    });

    /*私人聊天室*/
    $(".roomList").click(function () {
        socket.emit('join private room', $(this).text());
        console.log(socket);
    });
});