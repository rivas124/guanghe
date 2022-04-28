const express = require('express')
const db = require('../util/db')
const app = express.Router()

/* Emp list. */
app.get('/', (req, res, next) => {
    // SQL > select * from Product
    db.query('SELECT * FROM emp', [], function (results, fields) {
        let _data;
        if (results && results.length) {
            _data = {
                msg: 'The query is successful',
                data:results
            }
        } else {
            _data = {
                code: -1,
                msg: 'No add emp'
            }
        }
        res.json(_data)
    })
})

module.exports = app