const redis = require('redis');
let client = undefined;
module.exports = {
    createClient(port, host) {
        client = redis.createClient(port, host);
    },
    getClient() {
        return client;
    }
};