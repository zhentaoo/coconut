exports.index = function (req, res, next) {
    var chatRoom = require('../model/index').ChatRoom;
    chatRoom.find({}, function (err, docs) {
        res.render('chat/index', {
            session: req.session,
            roomList: docs,
            one: {title: '聊天室'}
        });
    });
};

exports.createRoom = function (req, res, next) {
    var chat = require('../model/index').ChatRoom;
    var roomName = req.body.roomName;
    chat.create({
        roomName: roomName,
        author: '',
        password: ''
    });
    res.redirect('/chat');
};

exports.privateChat = function (req, res, next) {
    var id = req.query.id;

    res.render('chat/privateChat', {
        session: req.session,
        roomName: id
    });
};
