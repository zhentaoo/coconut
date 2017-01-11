/**
 * The Mongoose [Schema](#schema_Schema) constructor
 *
 * ####Example:
 *
 *     var mongoose = require('mongoose');
 *     var Schema = mongoose.Schema;
 *     var CatSchema = new Schema(..);
 *
 * @method Schema
 * @api public
 */

var mongoose = require('mongoose');

var time = Date.parse(new Date());

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    time: {type: String, default: time},
    follower: {type: Number, default: 0}
});

mongoose.model('User', userSchema);
