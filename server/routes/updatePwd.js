const express = require('express')
const db = require('../util/db')
const md5 = require("md5");
const app = express.Router()

/* Update password. */
app.post('/', (req, res) => {
    let user = {
        usercode: req.body.usercode,
        userpwd: md5(req.body.userpwd),
        updatepwd: md5(req.body.updatepwd)
    }
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
    if (!user.updatepwd) {
        return res.json({
            code: -1,
            msg: 'The new password cannot be empty'
        })
    }
    db.query('SELECT * FROM userInfo where usercode=? and userpwd=?', [user.usercode, user.userpwd], function (results, fields) {
        let _data;
        if (results) {
            if (!results.length) {
                _data = {
                    code: -1,
                    msg: 'The old password is incorrect'
                }
            } else {
                //Insert user information
                db.query('update userInfo set userpwd=? where usercode=?', [user.updatepwd, user.usercode], function (result, fields) {
                    if (result) {
                        _data = {
                            msg: 'Update successfully'
                        }
                    } else {
                        _data = {
                            code: -1,
                            msg: 'Update failed'
                        }
                    }
                })
            }
        }
        res.json(_data)
    })
})


module.exports = app;