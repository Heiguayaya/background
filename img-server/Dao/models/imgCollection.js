const {
    DataTypes
} = require('sequelize')
const sequelize = require('../dbContent')

// 定义数据模型
module.exports = sequelize.define("imgCollection", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    typeCn: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});