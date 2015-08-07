$(function () {
    var socket = io.connect('http://10.10.10.123:3035');
    $("#private1").click(function () {
        //alert($("#private1").text());
        socket.emit('join private room', $("#private1").text());
        console.log(socket);
    });

    socket.on('privateSay', function (data) {
        console.log(data);
    });
});
