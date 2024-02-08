const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.productsDB,
});

connection.connect(error =>{
    if (error) throw error;
    console.log('Mysql online - DataBase');
});

module.exports = connection;