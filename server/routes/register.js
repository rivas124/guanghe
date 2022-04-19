const express = require('express')
const db = require('../util/db')
const app = express.Router()

/* Register. */
app.post('/', (req, res) => {
    // Gets the parameters passed from the foreground page
    let user = {
        usercode: req.body.usercode,
        userpwd: req.body.userpwd,
        tel: req.body.tel
    }
    // Check whether the parameter is null
    if (!user.usercode) {
        return res.json({
            code: -1,
            msg: 'The user name cannot be empty'
        })
    }
    if (!user.userpwd) {
        return res.json({
            code: -1,
            msg: 'The password cannot be empty'
        })
    }
    if (!user.tel) {
        return res.json({
            code: -1,
            msg: 'Mobile phone number cannot be empty'
        })
    }
    db.query('SELECT * FROM userInfo where usercode=?', [user.usercode], function (results, fields){
        let _data;
        if (results) {
            //Check whether the user list is empty
            if (results.length) {
                //If it is not empty, the user exists
                _data = {
                    code: -1,
                    msg: 'The user already exists'
                }
            } else {
                //Insert user information
                db.query('insert into userInfo values (null,?,?,?)',[user.usercode,user.userpwd,user.tel],function (result, fields){
                    if (result) {
                        _data = {
                            msg: 'Registered successfully'
                        }
                    } else {
                        _data = {
                            code: -1,
                            msg: 'Registration failed'
                        }
                    }
                })
            }
        }
        setTimeout(() => {
            //Returns the result of the operation to the foreground page
            res.json(_data)
        }, 200);
    })
})

module.exports = app;