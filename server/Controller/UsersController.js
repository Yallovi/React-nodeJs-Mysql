const response = require('../response');
const db = require('../settings/db');
const bcrypt = require('bcryptjs');

exports.users = (req, res) => {
    db.query('SELECT `id`, `name`, `last_name`, `email`  FROM `login`', (error, rows, fields) =>{
        if(error) {
            response.status(400, error, res);
        } else {  
            response.status(200, rows, res);
        }
    });

};

exports.add =(req, res) => {
        const postData = req.body.name;
        db.query(`${postData}`, (error, rows) =>{
            if(error) {
                response.status(400, error, res);
                
            } else { 
                response.status(200, rows, res);
            }
        });
};
exports.signup =(req, res) => {
        console.log(req.body.email);

        db.query("SELECT `id`, `email`, `name` FROM login WHERE `email` = '"+ req.body.email +"'" , (error, rows, fields) =>{
           if(error){
               response.status(400, error, res);
           } else if (typeof rows !== 'undefined' && rows.length > 0){
               console.log(rows);
               const row = JSON.parse(JSON.stringify(rows));
               row.map(rw =>{
                   response.status(302, {message: ` Пользователь с таки email - ${rw.email} уже существует `}, res);
                   return true;
               });
           }else { 
               const name = req.body.name;
               const last_name = req.body.last_name !== '' ? req.body.last_name : 'Не указано';
               const email = req.body.email;
               const salt = bcrypt.genSaltSync(15);
               const password = bcrypt.hashSync(req.body.password, salt);

               const sql = ("INSERT INTO `login` (`name`, `last_name`, `email`, `password`)  VALUES('"+ name +"', '"+ last_name +"', '"+ email +"','"+ password +"')");
               db.query(sql, (error, results) => {
                if(error){
                    response.status(400, error, res);
                } else {
                    response.status(200, {message: `Регистрация прошла успешно`, results}, res);
                }
               });
           }
        });
};
// const sql = "INSERT INTO `users`(`name`) VALUES('"+ postData +"')";