const express = require('express')
const db = require('../util/db')
const app = express.Router()

/* add emp list. */
app.post('/', (req, res) => {
    let user = {
        name: req.body.name,
        position: req.body.position,
        work: req.body.work,
        experience:req.body.experience
    }
    if (!user.name||user.experience||user.position||user.work) {
        return res.json({
            code: -1,
            msg: 'The values cannot be empty'
        })
    }
    let _data;
    db.query('insert into emp values (null,?,?,?,?)',[user.name,user.position,user.work,user.experience],function (result, fields){
        if (result) {
            _data = {
                msg: 'Add a successfully'
            }
        } else {
            _data = {
                code: -1,
                msg: 'Add a failed'
            }
        }
    })
    setTimeout(() => {
        //Returns the result of the operation to the foreground page
        res.json(_data)
    }, 200);
})

module.exports = app;