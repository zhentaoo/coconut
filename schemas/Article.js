var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
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

module.exports = articleSchema;