var mongoose = require('mongoose');

var time = Date.parse(new Date());
var programCategorySchema = new mongoose.Schema({
    category: String,
    programInfos: [Object],
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
    }
});

mongoose.model('ProgramCategory', programCategorySchema);
