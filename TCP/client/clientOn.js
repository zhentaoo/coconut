$(function () {
    var socket = io.connect('http://localhost:3035');

    socket.on('');

    socket.on('newOne', function (msg) {
        console.log('newOne:' + msg);
        document.getElementById('onlineNum').innerHTML = msg;
    });

    socket.on('publicMySay', function (data) {
        $('#publicChat').append('<div class="mySpeak">' + data + '</div>');

        $('#publicSayContent').val('');
        var div = document.getElementById('publicChat');
        div.scrollTop = div.scrollHeight;

        console.log(data);
    });

    socket.on('publicOtherSay', function (data) {
        $('#publicChat').append('<div class="speak">' + data + '</div>');
        $('#publicSayContent').val('');
        var div = document.getElementById('publicChat');
        div.scrollTop = div.scrollHeight;
        console.log(data);
    });

    socket.on('privateSay', function (data) {
        console.log(data);
    });
});
