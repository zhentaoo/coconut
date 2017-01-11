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
        /*有一个新的连接时：向所有客户端发送消息：在线人数+1，*/
        socket.on('join', function (data) {
            socket.name = data;
            var onlineNum = 0;
            connectionList[socket.id] = socket;
            for (var k in connectionList) {
                onlineNum++;
            }
            console.log('onlineNum:' + onlineNum);
            io.sockets.emit('newOne', onlineNum);
        });


        /*有客户端断开连接，通知所有客户端,在线人数减一*/
        socket.on('disconnect', function () {
            console.log('disconnect');
            var socketId = socket.id;
            delete connectionList[socketId];

            var onlineNum = 0;
            for (var k in connectionList) {
                onlineNum++;
            }
            console.log('onlineNum:' + onlineNum);
            io.sockets.emit('newOne', onlineNum);
        });


        /*公共聊天室*/
        socket.on('publicSay', function (data) {
            /*发送给当前客户端*/
            var myData = {
                name: socket.name,
                data: data
            };
            socket.emit('publicMySay', myData);

            /*发送给除了当前客户的的所有端口*/
            var otherData = {
                name: socket.name,
                data: data
            };
            socket.broadcast.emit('publicOtherSay', otherData);
        });

        /*todo:进入私人聊天室*/
        socket.on('join private room', function (data) {
            console.log("server join private room:" + socket.name);
            console.log("server join private room:" + data);

            socket.join(data);
            socket.room = data;
            io.sockets.in(data).emit('privateJoin', 'new one come in our private room');
        });

        socket.on('privateSay', function (data) {
            console.log(data);
            console.log(socket.room);

            /*发送给当前客户端*/
            var privateMySay = {
                name: socket.name,
                data: data
            };
            socket.emit('privateMySay', privateMySay);

            /*发送给该房间的其他客户端*/
            var privateOtherSay = {
                name: socket.name,
                data: data
            };
            socket.broadcast.to(socket.room).emit('privateOtherSay', privateOtherSay);
        });
    });
};
