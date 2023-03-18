const Sequelize = require('sequelize')

const sequelize = new Sequelize('shopper', 'root', 'Johnson#2#3', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize