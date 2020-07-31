var app = require('./config/server');

var rotaHome = require('./app/routes/home')(app);

var rotaNoticia = require('./app/routes/noticias')(app);

var rotaForm = require('./app/routes/formulario_inclusao_noticia')(app);

//app.get('/tecnologia',function(req, res){
//    res.render("secao/tecnologia")
//})

//esse metodo escuta requisições em uma determinada porta
//Passamos um callback, função por parametro para que ele executa na subida do servidor
app.listen(3000,function (){
    console.log('Servidor OK')
});
