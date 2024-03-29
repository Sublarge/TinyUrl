const express = require('express');
const mongoose = require('mongoose');
const redisCli = require('./cache/redis-cli');

const config = require('./config');
redisCli.createClient(config.redis_port,config.redis_host);

const indexRouter = require('./router/index');
const restRouter = require('./router/rest');
const redirectRouter = require('./router/redirect');

const app = express();
mongoose.connect(config.mongodb_url, {useNewUrlParser: true, useUnifiedTopology: true});

app.use('/static', express.static(__dirname + '/static'));
app.use('/', indexRouter);
app.use('/api/v1', restRouter);
app.use('/:shortUrl', redirectRouter);
app.listen(3000, () => console.log('Example app listening on port 3000!'));