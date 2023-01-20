const express = require('express');
const app = express();

const { connection } = require('./config/db');
const env = require('./config/env');

//routers
const userRouter = require('./routes/user');
const supplierRouter = require('./routes/supplier');

connection.connect((err) => {
    if (err) {
        console.log('error connecting: ' + err);
        return;
    }
    console.log('db connected');
});

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/supplier', supplierRouter);

app.listen(env.port, () => {
    console.log(`maisoft running on port: ${env.port}`);
});