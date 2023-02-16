/*Importar o modulo do framework express */
var express = require('express')
var consign = require('consign')
var bodyParser = require('body-parser')
var expressValidator = require('express-validator')

/*Iniciar objeto do express */
var app = express()

/*setar variaveis 'view engine' e 'views' do express*/
app.set('view engine', 'ejs')
app.set('views','./app/views')

/*Configurar middleware */
app.use(express.static('./app/public'))
/*Quando houver um post de um form, conseguimos recuperar os dados via json a partir do body*/
app.use(bodyParser.urlencoded({extended: true}))
app.use(expressValidator())

/*Efetua o autoload das rotas,models e controllers para o objeto app */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)


/*Exportar o objeto app */
module.exports = app