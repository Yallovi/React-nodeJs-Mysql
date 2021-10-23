const response = require('./../response');
const pool = require('../settings/db');

exports.users = (req, res) => {
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
};

exports.add =(req, res) => {
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
};
// const sql = "INSERT INTO `users`(`name`) VALUES('"+ postData +"')";