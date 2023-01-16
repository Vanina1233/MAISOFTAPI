const express = require('express');
const app = express();
const { connection } = require('./config/db');

const port = 3000;
connection.connect((err) => {
    if (err) {
        console.log('error connecting: ' + err);
        return;
    }
    console.log('db connected');
});

app.get('/hello', function (req, res) {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`maisoft running on port: ${port}`);
});