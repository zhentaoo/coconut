var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String,
    tags: [String],
    date: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        },
        allUpdateAt: {
            type: Date,
            default: Date.now()
        }
    },
    hidden: {
        type: Boolean,
        default: false
    },
    voter: [String],
    watcher: [String]
});


mongoose.model('Article', articleSchema);
