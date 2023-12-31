const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const login = require('./login');

app.use(bodyParser.urlencoded({ extended: false }));


app.use(login);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3002);
