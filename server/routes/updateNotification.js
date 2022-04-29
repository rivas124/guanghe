const express = require('express')
const db = require('../util/db')
const app = express.Router()


app.post('/', (req, res) => {
    let user = {
        noti1: req.body.noti1,
        noti2: req.body.noti2,
        noti3: req.body.noti3,
        tel:req.body.tel
    }
    let _data;
    db.query('update user_info set notification1=?,notification2=?,notification3=? where tel=?', [user.noti1, user.noti2,user.noti3,user.tel], function (result, fields) {
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