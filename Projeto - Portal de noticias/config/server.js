//o modulo express quando fazemos require dele, retorna uma função mas ela não
// executa essa função, apenas retorna é necessario que façamos a chamada da função 
// que o modulo retorna
var express = require('express');
var consign = require('consign')
var bodyParser = require('body-parser')
var expressValidator = require('express-validator')

//executando a função que o modulo express retornar
var app = express();

app.set('view engine', 'ejs');
app.set('views','./app/views')

app.use(express.static('./app/public'))
app.use(bodyParser.urlencoded({extend:true}))
app.use(expressValidator())

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app)

module.exports = app;