const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let UrlSchema = new Schema({
    shortUrl: String,
    longUrl: String,
});
let urlModel = mongoose.model('UrlModel', UrlSchema);
module.exports = urlModel;