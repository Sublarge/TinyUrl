const express = require('express');
const indexRouter = require('./router/index');
const restRouter = require('./router/rest');
const redirectRouter = require('./router/redirect');
const app = express();

// app.get('/', (req, res) => res.send('Hello World!'));
app.use('/static', express.static(__dirname + '/static'));
app.use('/', indexRouter);
app.use('/api/v1',restRouter);
app.use('/:shortUrl',redirectRouter);
app.listen(3000, () => console.log('Example app listening on port 3000!'));