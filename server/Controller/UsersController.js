const response = require('../response');
const dbLibrary = require('../settings/dbLibrary');
const db = require('../settings/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const authMiddleware = require('../middleware/auth.middleware');


setInterval(function () {
    db.query('SELECT 1');
}, 5000);

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
        const postData = req.body.task; 
        dbLibrary.query(`${postData}`, (error, rows) =>{
            if(error) {
                response.status(404, error, res);
                
            } else { 
                response.status(200, rows, res);
            }
        });
};
exports.signup =(req, res) => {

        db.query("SELECT `id`, `email`, `name` FROM login WHERE `email` = '"+ req.body.email +"'" , (error, rows, fields) =>{
           if(error){
               response.status(400, { message: 'server not found'}, error, res);
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

exports.privateOffice =(req, res) => {
    console.log(req)

    // db.query("SELECT `id`, `email`, `name` FROM login WHERE `email` = '"+ req.body.email +"'" , (error, rows, fields) =>{
    //    if(error){
    //        response.status(400, { message: 'server not found'}, error, res);
    //    } else if (typeof rows !== 'undefined' && rows.length > 0){
    //        const row = JSON.parse(JSON.stringify(rows));
    //        row.map(rw =>{
    //            response.status(302, {message: ` Пользователь с таки email - ${rw.email} уже существует `}, res);
    //            return true;
    //        });
    //    }else {    
           const name = req.body.name;
           const last_name = req.body.last_name
           const status = req.body.status;
        //    const salt = bcrypt.genSaltSync(15);
        //    const password = bcrypt.hashSync(req.body.password, salt);

           const sql = ("INSERT INTO `login` (`name`, `last_name`, `status`)  VALUES('"+ name +"', '"+ last_name +"', '"+ status +"')");
           db.query(sql, (error, results) => {
            if(error){
                response.status(400, error, res);
            } else {
                response.status(200, {message: `Регистрация прошла успешно`, results}, res);
            }
           });
    //    }
    // });
};

exports.progress =(req, res) => {
    console.log(req)  
     db.query("SELECT `lessonId`, `userId`, `lessonTask` FROM progress WHERE `lessonId` = '"+ req.body.lessonId +"'" , (error, rows, fields) =>{
           if(error){
               response.status(400, { message: 'server not found'}, error, res);
           } else if (typeof rows !== 'undefined' && rows.length > 0){
               const row = JSON.parse(JSON.stringify(rows));
               row.map(rw =>{
                   response.status(302, {message: ` Этот урок - ${rw.lessonTask} вы уже проходили `}, res);
                   return true;
               });
           }else {   
           const userId = req.body.userId;
           const lessonId = req.body.lessonId
           const lessonTask = req.body.lessonTask;

           const sql = ("INSERT INTO `progress` (`userId`, `lessonId`, `lessonTask`)  VALUES('"+ userId +"', '"+ lessonId +"', '"+ lessonTask +"')");
           db.query(sql, (error, results) => {
            if(error){
                response.status(400, error, res);
            } else {
                response.status(200, {message: `Прогресс добавлен успешно`, results}, res);
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
            response.status(404 ,  {message: `Пользователь с email - ${req.body.email} не найден. Зарегистрируйтесь.`}, res);
        } else {
            const row = JSON.parse(JSON.stringify(rows));
            row.map(rw =>{
                const password = bcrypt.compareSync(req.body.password, rw.password);
                if(password){
                    // Если true, тогда пускаем пользователя и генерируем token.
                    const token = jwt.sign({
                        userId: rw.id,
                        email: rw.email
                    }, config.jwt, {expiresIn: "1h"});

                    response.status(200,  {user:{userId: rw.id,email: rw.email}, token: token}, res);
                }else {
                    // Показываем ошибку , что пароль неверный.
                    response.status(401, {message: `Пароль неверный.`}, res);
                }
                return true;
            });
            
        };
    });
};

exports.authentication = (req, res) => {
    try{
        db.query("SELECT `id`, `email` FROM `login` WHERE `id` = '"+ req.user.userId +"'", (error, rows, fields) => {
        const row = JSON.parse(JSON.stringify(rows));
        row.map(rw =>{
            const token = jwt.sign({
                userId: rw.id,
                email: rw.email
            }, config.jwt, {expiresIn: "1h"});
            response.status(200,  {user:{userId: rw.id,email: rw.email}, token: token}, res);
            });
        });

    }catch(error){
        console.log(error);
        res.send({message: "server error"});
    }
};


exports.getProgress =(req, res) => { 

        db.query("SELECT `lessonId`, `lessonTask` FROM `progress` WHERE `userId` = '"+ req.body.userId +"'" , (error, rows, fields) =>{
            if(error){
                response.status(400, { message: 'server not found'}, error, res);
            } else if (typeof rows !== 'undefined' && rows.length < 0){
                const row = JSON.parse(JSON.stringify(rows));
                row.map(rw =>{
                    response.status(302, {message: ` Вы не прошли ни одного урока `}, res);
                    return true;
                });
            }else {   
            const userId = req.body.userId;
 
            const sql = ("SELECT `lessonId`, `lessonTask` FROM `progress` WHERE `userId` = '"+ req.body.userId +"'");
            db.query(sql, (error, results) => {
             if(error){
                 response.status(400, error, res);
             } else {
                 response.status(200, {message: `Ответ получен успешно`, results}, res);
             }
            });
               }
     });  
              

};

// const userId = req.body.userId;
 
// const sql = ("SELECT `lessonId`, `lessonTask` FROM `progress` WHERE `userId` = '"+ req.body.userId +"'");
// db.query(sql, (error, rows, results) => {
//     console.log('rows =>', rows.length <= 0)
//  if(error){
//      response.status(400, error, res);
//  } else if (rows.length <= 0){
//      response.status(302, error, res)
//  }
//   else {
//      response.status(200, {message: `Ответ получен успешно`, results}, res);
//  }
// });