const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 5000;
const cors = require('./middleware/cors.middleware');

app.use(cors);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Mysql
const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    port            : 3307,
    password        : 'root',
    database        : 'testnodejs',
});




app.get('', (req, res) =>{
    pool.getConnection((err, connection) =>{
        if(err) throw err;
        console.log(`connected as id ${connection.threadId}`);

        connection.query('SELECT * FROM users', (err, rows) =>{
            connection.release(); // return the connection to  pool

            if(!err) {
                res.send(rows);
            } else { 
                console.log(err);
            }
            console.log('The data from beer table are: \n', rows);
        });

    });      
});

app.post('/api/listen', (req, res) =>{
    pool.getConnection((err, connection) =>{
        if(err) throw err;

        const postData = req.body.name;
        connection.query(`${postData}`, (err, rows) =>{
            connection.release(); // return the connection to  pool

            if(!err) {
                res.send('Name with the record ID  has been added.');
            } else { 
                console.log(err);
            }
            console.log('The data from name table are: \n', rows);
        });
        console.log(req.body);

    });      
});

// app.post('/api/listitems', (req, res) => {
//     var postData  = req.body;
//     connection.query('INSERT INTO list_items SET ?', postData, (error, results, 
//   fields) => {
//      if (error) throw error;
//      res.end(JSON.stringify(results));
//    });
//   });











// listen on enviroment port or 5000
app.listen(port, () => {console.log(`Listen on port ${port}`)}); 