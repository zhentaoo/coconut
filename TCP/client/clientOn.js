var socket = io.connect('http://localhost:3088');

socket.on('message', function (msg) {
    $('#messages').append($('<li>').text(msg));
});

//收到加入聊天室广播后，显示消息
socket.on('broadcast_join', function (data) {
    console.log(data.username + '加入了聊天室');
});

//收到离开聊天室广播后，显示消息
socket.on('broadcast_quit', function (data) {
    console.log(data.username + '离开了聊天室');
});

//收到别人发送的消息后，显示消息
socket.on('broadcast_say', function (data) {
    console.log(data.username + '说: ' + data.text);
});