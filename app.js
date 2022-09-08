const express = require("express")
require('dotenv').config()
var morgan = require('morgan')
const app = express();
const cookieParser = require('cookie-parser')
const fileupload = require('express-fileupload')

//for swagger documentation
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


//regular middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//cokkie and file middleware
app.use(cookieParser())
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
}))

// temp check
app.set('view engine', 'ejs')

//import all routes here
const home = require('./routes/homeRoute')
const user = require('./routes/userRoute')
const product = require('./routes/productRoute')
const payment = require('./routes/paymentRoute')
const order = require('./routes/orderRoute')


//router middleware
app.use('/api/v1', home)
app.use('/api/v1', user)
app.use('/api/v1', product)
app.use('/api/v1', payment)
app.use('/api/v1', order)

app.get('/signuptest', (req, res) => {
    res.render('signuptest')
})

//morgan middleware
app.use(morgan('tiny'))

// export app js
module.exports = app;