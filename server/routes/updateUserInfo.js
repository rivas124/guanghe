const express = require('express')
const db = require('../util/db')
const app = express.Router()


app.post('/', (req, res) => {
    let user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        tel: req.body.tel,
        company: req.body.company,
        Desi: req.body.Desi,
        Bio: req.body.Bio,
        oldTel:req.body.oldTel
    }
    let _data;
    db.query('update user_info set firstName=?,lastName=?,email=?,tel=?,Desi=?,Bio=? where tel=?', [user.firstName,user.lastName,user.email,user.tel,user.Desi,user.Bio,user.oldTel], function (result, fields) {
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