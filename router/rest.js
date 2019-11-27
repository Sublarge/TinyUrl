const express = require('express');
const bodyParser = require('body-parser');
const urlService = require('../service/url-service-mongo');

let router = express.Router();
let jsonParser = bodyParser.json();


router.post('/urls', jsonParser, function (req, res) {
    let longUrl = req.body.longUrl;
    if (!longUrl.startsWith('http')) {
        longUrl = 'http://' + longUrl;
    }
    let shortUrl = urlService.getShortUrl(longUrl, function (data) {
        if (data) {
            res.json({
                "longUrl": longUrl,
                "shortUrl": data,
            });
        }
    });
});

module.exports = router;