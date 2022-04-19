const express = require('express')
const db = require('../util/db')
const app = express.Router()
const jwt = require('jsonwebtoken');
const secret = 'secret12345';

    function verify(result){
        let res
        try {
            let {exp = 0} = result, current = Math.floor(Date.now() / 1000)
            if (current <= exp) {
                res = 'overdue'
            }
        } catch (e) {
            res = 'err'
        }
        return res
    }

    app.use((req, res,next) => {
        if (req.headers.authorization) {
            const token = req.headers.authorization;
            const {username,password} = jwt.verify(token, secret); // 对token进行解密查找
            let sql = 'select * from test where usercode=? and userpwd=?';
            let sqlArr = [username,password];
            let result
            db.query(sql,sqlArr,function (results) { result = results });
            if (result.length === 0) {
                return res.json({
                    code:-1,
                    mess:'User does not exist'
                })
            }
            if (password !== result[0].userpwd) {
                return res.json({
                    code:-1,
                    mess:'The login has expired. Log in again'
                })
            } else {
                let vtf = verify(result)
                if (vtf === 'err') {
                    return res.json({
                        code:-1,
                        mess:'Unauthorized request. Log in again'
                    })
                } else if(vtf === 'overdue'){
                    return res.json({
                        code:-1,
                        mess:'The login has expired. Log in again'
                    })
                }else{
                    let created = Math.floor(Date.now() / 1000)
                    const token = jwt.sign({  username,password }, secret, { expiresIn:created + 60 * 60 });
                    res.json({
                        userInfo: {
                            username: username
                        },
                        token:token
                    })
                    next()
                }
            }
        } else {
            return res.json({
                code:-1,
                mess:'Invalid request header'
            })
        }
    })

module.exports = app
