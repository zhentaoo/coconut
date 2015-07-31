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

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

mongoose.model('User', userSchema);
