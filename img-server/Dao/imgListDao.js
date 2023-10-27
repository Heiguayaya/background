const imgList = require('./models/imgList')

//添加表情包
module.exports.addImageDao = async function (imgArr) {
    const ins = await imgList.bulkCreate(imgArr)
    return ins
}

//分页获取表情
module.exports.findImagePageDao = async function () {

}