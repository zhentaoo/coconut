var socket = io.connect('http://localhost:3035');
$(function () {
    /*通知服务端，有客户端接入*/
    socket.emit('join', {
        username: 'client'
    });

    /*创建新房间*/
    $("#createRoom").submit(function () {
        socket.emit();
    });
});

