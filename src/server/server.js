'use strict';

const SERVER_PORT = 3000;
const SRC_DIR = __dirname + '/..';

const express = require('express');
const app = express();

app.use('/static', express.static(SRC_DIR + '/web/js'));
app.set('view engine', 'pug');
app.set('views', SRC_DIR + '/web/views');

app.get('*', (req, res) => {
    res.render('index');
});

app.listen(SERVER_PORT, () => {
    console.log('Application started on port: ', SERVER_PORT);
});
