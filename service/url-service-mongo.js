const utils = require('./utils/util');
const UrlModel = require('../models/urlModel');
let generateShortUrl = function (callback) {
    UrlModel.count({}, function (err, num) {
        callback(utils.convertTo62(num));
    });
};
module.exports = {
    getShortUrl: function (longUrl, callback) {
        UrlModel.findOne({longUrl: longUrl}, function (err, data) {
            if (data) {
                callback(data['shortUrl']);
            } else {
                generateShortUrl(function (shortUrl) {
                    let url = UrlModel({
                        shortUrl: shortUrl,
                        longUrl: longUrl
                    });
                    url.save();
                    callback(shortUrl);
                });
            }
        });
    },
    getLongUrl: function (shortUrl, callback) {
        UrlModel.findOne({shortUrl: shortUrl}, function (err, data) {
            if (data) {
                callback(data['longUrl']);
            } else {
                callback(data);
            }
        });
    },
};
