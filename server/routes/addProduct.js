const express = require('express')
const db = require('../util/db')
const multiparty = require('multiparty');
const uuid = require('node-uuid');
const app = express.Router()

/* Save company's products. */

app.post('/',function (res,req) {
    var form = new multiparty.Form();
    form.uploadDir='images'   //Upload the image to save the address
    form.parse(req, function(err, fields, files) {
        //Get the submitted data and the image information returned after successfully uploading the image
        //Submitted data and image information returned after successfully uploading the image
        var title = fields.title;
        var price = fields.price;
        var description = fields.description;
        var pic = files.pic.path;
        if(!title || !price){
            return res.json({
                code: -1,
                msg: 'title or price cannot be empty'
            })
        }
        //Insert data into the database
        db.query('SELECT * FROM Product where title=?', [title], function (results, fields) {
            let _data;
            if (results) {
                //Check whether the product list is empty
                if (results.length) {
                    //If it is not empty, the product exists
                    _data = {
                        code: -1,
                        msg: 'The product already exists'
                    }
                } else {
                    //Insert product information
                    db.query('insert into Product values (null,?,?,?)', [title, price, description, pic], function (result, fields) {
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
                }
            }
            res.json(_data)
        })
    })
})

module.exports = app