const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'shopper',
    password: 'Johnson#2#3'
})

module.exports = pool.promise()