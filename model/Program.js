var mongoose = require('mongoose');

var programSchema = new mongoose.Schema({
    title: String,
    content: String,
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


mongoose.model('Program', programSchema);
