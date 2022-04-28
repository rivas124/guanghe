const express = require('express')
const db = require('../util/db')
const app = express.Router()

/* User Info. */
app.get('/', (req, res, next) => {
    let tel = req.query.tel
    // SQL > select * from user_info
    db.query('SELECT * FROM user_info where tel = ?', [tel], function (results, fields) {
        if (!tel) {
            return res.json( {
                code: -1,
                msg: 'The tel cannot be empty'
            })
        }
        let _data;
        if (results && results.length) {
            _data = {
                msg: 'The query is successful',
                data:results
            }
        } else {
            _data = {
                code: -1,
                msg: 'No such user'
            }
        }
        res.json(_data)
    })
})

module.exports = app