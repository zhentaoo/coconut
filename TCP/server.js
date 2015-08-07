/**
 * 发送给当前客户端
 * socket.emit('message', "this is a test");
 *
 * 发送给在game房间里的所有用客户端，除了当前客户端
 * socket.broadcast.to('game').emit('message', 'nice game');
 *
 * 发送给所有客户端，除了当前客户端
 * socket.broadcast.emit('message', "this is a test");
 *
 * 发送给socketid这个客户端消息
 * io.sockets.socket(socketid).emit('message', 'for your eyes only');
 *
 * 发送给所有客户端
 * io.sockets.emit('message', "this is a test");
 *
 * 发送给在game房间里的有所客户端
 * io.sockets.in('game').emit('message', 'cool game');
 */

exports.runs = function (io) {
    var connectionList = {};
    /*io.sockets.on函数接受字符串'connection'作为客户端发起连接的事件，当连接成功后，调用带有socket参数的回调函数*/
    io.sockets.on('connection', function (socket) {
        /*用户进入房间，发送消息*/
        io.sockets.in('private1').emit('news', 'hello in private 1 room');

        /*接受客户端群聊消息*/
        socket.on('publicSay', function (data) {
            /*发送给当前客户端*/
            socket.emit('publicMySay', data);

            /*发送给除了当前客户的的所有端口*/
            socket.broadcast.emit('publicOtherSay', data);
        });

        /*todo:进入私人聊天室*/
        socket.on('join private room', function (data) {
            console.log(data);
            socket.join(data);
            io.sockets.in(data).emit('privateSay', 'new one come in our room');
        });

        /*用户进入聊天室时：保存socket*/
        socket.on('join', function () {
            console.log('join');
            var socketId = socket.id;
            connectionList[socketId] = {
                socket: socket
            };

            /*有一个新的连接时：向所有客户端发送消息：在线人数+1，*/
            var onlineNum = 0;
            for (var k in connectionList) {
                onlineNum++;
            }
            console.log('onlineNum:' + onlineNum);
            io.sockets.emit('newOne', onlineNum);
        });

        //用户离开聊天室事件，向其他在线用户广播其离开，在线人数-1
        socket.on('disconnect', function () {
            console.log('disconnect');

            var socketId = socket.id;
            delete connectionList[socketId];

            /*有一个新的连接时：向所有客户端发送消息：在线人数+1，*/
            var onlineNum = 0;
            for (var k in connectionList) {
                onlineNum++;
            }
            console.log('onlineNum:' + onlineNum);
            io.sockets.emit('newOne', onlineNum);
        });
    });
};
