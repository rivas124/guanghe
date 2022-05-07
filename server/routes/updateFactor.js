const express = require('express')
const db = require('../util/db')
const app = express.Router()


app.post('/', (req, res) => {
    let user = {
        Login: req.body.Login,
        TwoFactor: req.body.TwoFactor,
        Recovery:req.body.Recovery,
        tel:req.body.tel
    }
    let _data;
    db.query('update user_info set Login=?,TwoFactor=?,Recovery=? where tel=?', [user.Login, user.TwoFactor,user.Recovery,user.tel], function (result, fields) {
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
    res.json(_data)
})


module.exports = app;