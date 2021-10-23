const mysql = require('mysql2');

const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    port            : 3307,
    password        : 'root',
    database        : 'testnodejs',
});

pool.getConnection((error) => {
    if(error) {
        return console.log('Ошибка подключения к БД');
    }else {
        return console.log('Подключение успешно');
    }
});

module.exports = pool;