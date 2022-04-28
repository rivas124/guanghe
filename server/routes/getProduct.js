const express = require('express')
const db = require('../util/db')
const app = express.Router()

/* Login. */
app.get('/', (req, res, next) => {
    // SQL > select * from Product
    db.query('SELECT * FROM Product', [], function (results, fields) {
        let _data;
        if (results && results.length) {
            _data = {
                msg: 'The query is successful',
                data:results
            }
        } else {
            _data = {
                code: -1,
                msg: 'No product'
            }
        }
        res.json(_data)
    })
})

module.exports = app