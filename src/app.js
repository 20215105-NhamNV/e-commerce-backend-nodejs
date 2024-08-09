const express = require('express')
const morgan = require('morgan')// log HTTP requests
const helmet = require('helmet');//security of Express.js applications
const compression = require('compression');// compress the response data
const app = express()

//init middlewares
app.use(morgan('dev'))//GET / 200 0.465 ms - 35 
app.use(helmet())
app.use(compression())

//inint db
require('./dbs/Init.mongodb')
const { checkOverload } = require('./helpers/check.connect')
checkOverload()
//init routes
app.get('/', (req, res, next) => {
    const strCompress = 'Hello Van Nham'
    return res.status(200).json({
        message: 'Welcome to my project',
        metadata: strCompress.repeat(100000)
    })
})

//handling error

module.exports = app