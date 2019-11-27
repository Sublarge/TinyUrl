const express = require('express');
const path = require('path');
const urlService = require('../service/url-service-mongo-redis');
let router = express.Router();
router.get('*', function (req, res) {

    let shortUrl = req.originalUrl.slice(1);
    urlService.getLongUrl(shortUrl, function (url) {
        if (url) {
            res.redirect(301, url);
        } else {
            res.sendFile('404.html', {root: path.join(__dirname, '../static')});
        }
    });
});

module.exports = router;