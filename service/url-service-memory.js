const utils = require('./utils/util');

let shortToLong = {};
let longToShort = {};

let generateShortUrl = function (longUrl,callback) {
    let num = Object.keys(longToShort).length;
    let shortUrl = utils.convertTo62(num);
    longToShort[longUrl] = shortUrl;
    shortToLong[shortUrl] = longUrl;
    callback(shortUrl);
};

module.exports = {
    getShortUrl: function (longUrl, callback) {
        let shortUrl = longToShort[longUrl];
        console.log(longUrl);
        if(shortUrl){
            callback(shortUrl);
        }else {
            generateShortUrl(longUrl,callback);
        }
    },
    getLongUrl:function (shortUrl, callback) {
        callback(shortToLong[shortUrl]);
    }
};