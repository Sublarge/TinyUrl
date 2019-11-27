const express = require('express');
const path = require('path');
let router = express.Router();

router.get('/', function (req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, '../static')});
});


module.exports = router;