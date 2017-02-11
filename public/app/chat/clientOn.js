$(function () {
        var url = window.location.host;
        var socket = io.connect(url);
        
        socket.on('newOne', function (msg) {
            console.log('newOne:' + msg);
            document.getElementById('onlineNum').innerHTML = msg;
        });


        socket.on('publicMySay', function (datas) {
            $('#publicChat').append('<div class="floatRight"><div class="mySpeak">' + datas.data + '</div>' + '<div class="mySpeakName">:' + datas.name + '</div></div>');
            var div = document.getElementById('publicChat');
            div.scrollTop = div.scrollHeight;
            console.log(datas);
        });

        socket.on('publicOtherSay', function (datas) {
            $('#publicChat').append('<div class="floatLeft"><div class="speakName">' + datas.name + ':</div>' + '<div class="speak">' + datas.data + '</div></div>');
            var div = document.getElementById('publicChat');
            div.scrollTop = div.scrollHeight;
            console.log(datas);
        });


        socket.on('privateJoin', function (data) {
            console.log(data);
        });

        socket.on('privateMySay', function (datas) {
            console.log(datas);
            $('#privateChatContent').append('<div class="floatRight"><div class="mySpeak">' + datas.data + '</div>' + '<div class="mySpeakName">:' + datas.name + '</div></div>');

        });

        socket.on('privateOtherSay', function (datas) {
            console.log(datas);
            $('#privateChatContent').append('<div class="floatLeft"><div class="speakName">' + datas.name + ':</div>' + '<div class="speak">' + datas.data + '</div></div>');
        });
});
