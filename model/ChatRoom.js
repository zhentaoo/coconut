var mongoose = require('mongoose');

var chatRoomSchema = new mongoose.Schema({
    title: String,
    author: String,
    password: String
});

mongoose.model('ChatRoom', chatRoomSchema);
