const urlService = require('./url-service-mongo');
const redisCli = require('../cache/redis-cli');
let client = redisCli.getClient();
module.exports = {
    getShortUrl: function (longUrl, callback) {
        client.get(longUrl, function (err, shortUrl) {
            if (err || !shortUrl) {
                urlService.getShortUrl(longUrl, function (shortUrl) {
                    console.log('get shortUrl from mongo:', shortUrl);

                    client.set(longUrl, shortUrl, function (err, data) {
                        console.log(err, data);
                    });
                    callback(shortUrl);
                });
            } else {
                console.log('get shortUrl from redis:', shortUrl);
                callback(shortUrl);
            }
        });
    },
    getLongUrl: function (shortUrl, callback) {
        client.get(shortUrl, function (err, longUrl) {
            if (err || !longUrl) {
                urlService.getLongUrl(shortUrl, function (longUrl) {
                    console.log('get shortUrl from mongo:', shortUrl);
                    client.set(shortUrl, longUrl, function (err, data) {
                        console.log(err, data);
                    });
                    callback(longUrl);
                });
            } else {
                console.log('get longUrl from redis:', longUrl);
                callback(longUrl);
            }
        });
    },
};
