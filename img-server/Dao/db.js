const sequelize = require('./dbContent');
const imgList = require('./models/imgList');

(async function () {
    await sequelize.sync({
        alert: true
    })
})()