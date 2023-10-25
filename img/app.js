const {
    getImgs
} = require('./src/router/imgs')

const express = require('express');
const {
    request
} = require('express');
const app = express();
const prot = 8888;

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Request-Method", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("content-type", "application/json");
    next();
})

app.get('/', (req, res) => {
    res.send("Hello, world!");
})

app.get('/api/img', async (req, res) => {
    res.status(200);
    res.send(await getImgs(req.query.size))
})

app.listen(prot, () => {
    console.log(`服务器已启动：${prot}`);
})