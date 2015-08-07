$(function () {
    var socket = io.connect('http://localhost:3035');
    //socket.emit('jo');

    $('#publicSay').submit(function () {
        var content = $('#publicSayContent').val();
        socket.emit('publicSay', content);
        return false;
    });

    $("#private1").click(function () {
        socket.emit('join private room', $("#private1").text());
        console.log(socket);
    });
});

