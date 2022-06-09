const mysql = require('mysql2');
const config = require('../libraryConfig');

const pool = mysql.createPool({
    connectionLimit: 100,
    host            : config.HOST,
    user            : config.DBUSER,
    port            : config.PORT,
    password        : config.DBPASSWORD,
    database        : config.DBNAME,
})


// const connection = mysql.createConnection({
//     host            : config.HOST,
//     user            : config.DBUSER,
//     port            : config.PORT,
//     password        : config.DBPASSWORD,
//     database        : config.DBNAME,
// });


// app.get('', (req, res) =>{
//     connection.getConnection((err, connection) =>{
//         if(err) throw err;
//         console.log(`connected as id ${connection.threadId}`);

//         connection.query('SELECT * FROM users', (err, rows) =>{
//             connection.release(); // return the connection to  pool

//             if(!err) {
//                 res.send(rows);
//             } else { 
//                 console.log(err);
//             }
//             console.log('The data from beer table are: \n', rows);
//         });

//     });      
// });





module.exports = pool;