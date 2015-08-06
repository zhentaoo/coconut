$(function () {
    var socket = io.connect('http://10.10.10.123:3035');

    $('#publicSay').submit(function () {
        var content = $('#publicSayContent').val();
        //alert($('#publicSayContent').val());
        socket.emit('publicSay', content);
        return false;
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
});
