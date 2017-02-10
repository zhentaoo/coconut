var mongoose = require('mongoose');

var time = Date.parse(new Date());
var programSchema = new mongoose.Schema({
    title: String,
    content: String,
    category: String,
    date: {
        createAt: {
            type: String,
            default: time
        },
        updateAt: {
            type: String,
            default: time
        },
        allUpdateAt: {
            type: String,
            default: time
        }
    },
    hidden: {
        type: Boolean,
        default: false
    },
    voter: [String],
    watcher: [String]
});


mongoose.model('Program', programSchema);
