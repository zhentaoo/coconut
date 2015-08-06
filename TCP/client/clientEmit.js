var socket = io.connect('http://localhost:3088');

/*通知服务端，有客户端接入*/
socket.emit('join', {
    username: 'client'
});