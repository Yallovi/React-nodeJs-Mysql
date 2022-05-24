const mysql = require('mysql');
const config = require('../libraryConfig');

const connection = mysql.createConnection({
    host            : config.HOST,
    user            : config.DBUSER,
    port            : config.PORT,
    password        : config.DBPASSWORD,
    database        : config.DBNAME,
});

connection.connect((error) => {
    if(error) {
        return console.log('Ошибка подключения к БД!');
    } else {
        return console.log('Подлючение успешно!');
    }
});


module.exports = connection;