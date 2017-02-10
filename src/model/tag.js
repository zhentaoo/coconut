var mongoose = require('mongoose');

var time = Date.parse(new Date());
var tagSchema = new mongoose.Schema({
  name: String,
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
});

mongoose.model('tag', tagSchema);
