const express = require('express')
const app = express.Router()
var addProductRouter = require('./addProduct')
var getProductRouter = require('./getProduct')
var addEmpRouter = require('./addEmp')
var getEmpRouter = require('./getEmpList')
var tokenRouter = require('./Token')

app.use('*',tokenRouter)

app.use('/addProduct',addProductRouter)
app.use('/getProduct',getProductRouter)
app.use('/addEmp',addEmpRouter)
app.use('/getEmpList',getEmpRouter)

module.exports = app