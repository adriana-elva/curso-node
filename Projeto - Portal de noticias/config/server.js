//o modulo express quando fazemos require dele, retorna uma função mas ela não
// executa essa função, apenas retorna é necessario que façamos a chamada da função 
// que o modulo retorna
var express = require('express');
//var msg = require('./modeTeste')();

//executando a função que o modulo express retornar
var app = express();

app.set('view engine', 'ejs');

app.set('views','./app/views')

module.exports = app;