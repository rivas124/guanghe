const express = require('express')
const db = require('../util/db')
const app = express.Router()
const jwt = require('jsonwebtoken');
const md5 = require("md5");
const secret = 'secret12345';

/* Login. */
app.post('/', (req, res, next) => {
    // SQL > select * from user
    let user = {
        username: req.body.usercode,
        password: md5(req.body.userpwd)
    }
    db.query('SELECT * FROM userInfo where usercode=? and userpwd=?', [user.username,user.password], function (results, fields) {
        // Check whether the parameter is null
        if (!user.username) {
            return res.json( {
                code: -1,
                msg: 'The user name cannot be empty'
            })
        }
        if (!user.password) {
            return res.json({
                code: -1,
                msg: 'The password cannot be empty'
            })
        }
        let _data;
        /* If the user name and password indexes are displayed, the user exists and the password is correct.
         Otherwise, the user name does not exist or the password is incorrect is displayed */
        if (results && results.length) {
            let created = Math.floor(Date.now() / 1000)
            let username = user.username,password = user.password
            const token = jwt.sign({  username,password }, secret, { expiresIn:created + 60 * 60 });
            _data = {
                msg: 'Login successful',
                data: {
                    userInfo: {
                        username: user.username
                    },
                    token:token
                }
            }
        } else {
            _data = {
                code: -1,
                msg: 'The username does not exist or the login password is incorrect'
            }
        }
        res.json(_data)
    })
})

module.exports = app