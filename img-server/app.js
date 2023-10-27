const {
    getImgs
} = require('./Router/imgs')

const express = require('express');
let app = express();
const prot = 8888;

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Request-Method", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("content-type", "application/json");
    next();
})

// app.get('/', (req, res) => {
//     res.send("Hello, world!");
// })

app.get('/api/img', async (req, res) => {
    res.status(200);
    // res.send(await getImgs(req.query.size))
})

// 引入数据库
require('./Dao/db')

//引入路由
const imgs = require('./Router/imgs')

//使用路由
app.use("/api/img", require('./Router/imgs'))

app.listen(prot, () => {
    console.log(`服务器已启动：${prot}`);
})