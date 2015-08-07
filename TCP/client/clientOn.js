$(function () {
    var socket = io.connect('http://localhost:3035');
    /*在线人数*/
    socket.on('newOne', function (msg) {
        console.log('newOne:' + msg);
        document.getElementById('onlineNum').innerHTML = msg;
    });

    /*公共聊天室*/
    socket.on('publicMySay', function (datas) {
        $('#publicChat').append('<div class="floatRight"><div class="mySpeak">' + datas.data + '</div>' + '<div class="mySpeakName">:' + datas.name + '</div></div>');

        $('#publicSayContent').val('');
        var div = document.getElementById('publicChat');
        div.scrollTop = div.scrollHeight;

        console.log(datas);
    });

    socket.on('publicOtherSay', function (datas) {
        $('#publicChat').append('<div class="floatLeft"><div class="speakName">' + datas.name + ':</div>' + '<div class="speak">' + datas.data + '</div></div>');
        $('#publicSayContent').val('');
        var div = document.getElementById('publicChat');
        div.scrollTop = div.scrollHeight;
        console.log(datas);
    });

    /*私人聊天室*/
    socket.on('privateJoin', function (data) {
        console.log(data);
    });

    socket.on('privateSay', function (data) {
        console.log(data);
    });
});
