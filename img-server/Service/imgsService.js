const {
    addImageDao
} = require('../Dao/imgListDao')

module.exports.addImg = async function (newImg) {
    const data = await addImageDao(newImg)
    return {
        "code": 0,
        "msg": "",
        "data": data
    }
}

exports.deleteImg = function (imgArr) {

};

exports.getImgs = function () {

};