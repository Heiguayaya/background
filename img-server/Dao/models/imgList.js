const {
    DataTypes
} = require('sequelize')
const sequelize = require('../dbContent')

const imgList = module.exports = sequelize.define('imgList', {
    desc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hashId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    height: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false
    },
    width: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

(async function () {
    await imgList.sync({
        alert: true
    })
})()

module.exports = imgList