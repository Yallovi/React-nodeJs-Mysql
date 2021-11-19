const response = require('../response');
const db = require('../settings/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');    

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

        db.query("SELECT `id`, `email`, `name` FROM login WHERE `email` = '"+ req.body.email +"'" , (error, rows, fields) =>{
           if(error){
               response.status(400, error, res);
           } else if (typeof rows !== 'undefined' && rows.length > 0){
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

exports.signin = (req, res) => {
    db.query("SELECT `id`, `email`, `password` FROM `login` WHERE `email` = '"+ req.body.email +"'", (error, rows, fields) => {
        if(error){
            response.status(400, error, res);
        } else if(rows.length <= 0){
            response.status(404 , `Пользователь с email - ${body.req.email} не найден. Зарегистрируйтесь.`, res);
        } else {
            const row = JSON.parse(JSON.stringify(rows));
            row.map(rw =>{
                const password = bcrypt.compareSync(req.body.password, rw.password);
                if(password){
                    // Если true, тогда пускаем пользователя и генерируем token.
                    const token = jwt.sign({
                        userId: rw.id,
                        email: rw.email
                    }, config.jwt, {expiresIn: 120 * 120});

                    response.status(200, {token: token, user:{id:rw.id, email: rw.email}}, res);
                }else {
                    // Показываем ошибку , что пароль неверный.
                    response.status(401, {message: `Пароль неверный.`}, res);
                }
                return true;
            });
            
        };
    });
};