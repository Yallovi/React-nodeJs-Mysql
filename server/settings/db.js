const mysql = require('mysql');
const env = require('./../dbenv');

const connection = mysql.createConnection({
    host            : env.HOST,
    user            : env.DBUSER,
    port            : env.PORT,
    password        : env.DBPASSWORD,
    database        : env.DBNAME,
});

connection.connect((error) => {
    if(error) {
        return console.log('Ошибка подключения к БД!');
    } else {
        return console.log('Подлючение успешно!');
    }
});

module.exports = connection;

