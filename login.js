const express = require('express');

const router = express.Router();
const store = require("store2");

const fs = require('fs');

router.get('/login', (req, res, next) => {
    res.send('<form action="/" method="GET"><input type="text" name="username"><button type="submit">Login</button></form>');
});

router.get('/', (req, res, next) => {

    store("username", req.body);

    let lastname = store.get(req.body);
    let data;

    fs.appendFile('message.txt', `${lastname} : ${data}`, err => {
        if (err) console.log(err);
    })

    res.send('<form><input type="text-box" name="text"><button type="submit">Send</button></form>');
    const body = [];
    req.on('data', chunk => {
        body.push(chunk);
    });
    const parsedBody = Buffer.concat(body).toString();
    const message = parsedBody.split('=')[0];
    fs.writeFile('message.txt', message);
    fs.readFileSync('message.txt', (err, data) => {
        if (err) console.log(err);
        data = data;
    })
});

module.exports = router;