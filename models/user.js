const Sequelize = require('sequelize')

const sequelize = require('../util/database')


const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        alowNull: false,
        primaryKey: true
    },
    username:{
        type:Sequelize.STRING,
        alowNull:false
    },
    email: {
        type: Sequelize.STRING,
        alowNull: false}
})

module.exports = User