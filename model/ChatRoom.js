var mongoose = require('mongoose');

var chatRoomSchema = new mongoose.Schema({
    roomName: String,
    author: String,
    password: String
});

mongoose.model('ChatRoom', chatRoomSchema);
