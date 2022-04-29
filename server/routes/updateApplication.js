const express = require('express')
const db = require('../util/db')
const app = express.Router()


app.post('/', (req, res) => {
    let user = {
        app1: req.body.app1,
        Lorem: req.body.Lorem,
        tel:req.body.tel
    }
    let _data;
    db.query('update user_info set app1=?,Lorem=? where tel=?', [user.app1, user.Lorem,user.tel], function (result, fields) {
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