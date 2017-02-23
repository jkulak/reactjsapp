'use strict';

const SERVER_PORT = 3000;

const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/web/js'));
app.set('view engine', 'pug');
app.set('views', __dirname + '/web/views');

app.get('*', (req, res) => {
    res.render('index');
});

app.listen(SERVER_PORT, () => {
    console.log('Application started on port: ', SERVER_PORT);
});
