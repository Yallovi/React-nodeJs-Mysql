const response = require('../response');
const dbLibrary = require('../settings/dbLibrary');
const db = require('../settings/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const authMiddleware = require('../middleware/auth.middleware');



exports.addTestTheory =(req, res) => {

    db.query("SELECT `lessonTheoryId`, `userId`, `lessonTheoryTask` FROM progress WHERE `lessonTheoryId` = '"+ req.body.lessonTheoryId +"'" , (error, rows, fields) =>{
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
           const lessonTheoryId = req.body.lessonTheoryId
           const lessonTheoryTask = req.body.lessonTheoryTask;

           const sql = ("INSERT INTO `progress` (`userId`, `lessonTheoryId`, `lessonTheoryTask`)  VALUES('"+ userId +"', '"+ lessonTheoryId +"', '"+ lessonTheoryTask +"')");
           db.query(sql, (error, results) => {
            if(error){
                response.status(400, error, res);
            } else {
                response.status(200, {message: `Урок добавлен в прогресс!`, results}, res);
            }
           });
        }
    });
};