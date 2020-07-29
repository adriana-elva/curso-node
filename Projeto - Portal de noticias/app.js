//o modulo express quando fazemos require dele, retorna uma função mas ela não
// executa essa função, apenas retorna é necessario que façamos a chamada da função 
// que o modulo retorna
var express = require('express');
//executando a função que o modulo express retornar
var app = express();

app.set('view engine', 'ejs');

app.get('/',function(req, res){
    res.render("home/index")
});

app.get('/formulario_inclusao_noticia',function(req, res){
    res.render("admin/form_add_noticia")
});

app.get('/noticias',function(req, res){
    res.render("noticias/noticias")
});

app.get('/tecnologia',function(req, res){
    res.render("secao/tecnologia")
})

//esse metodo escuta requisições em uma determinada porta
//Passamos um callback, função por parametro para que ele executa na subida do servidor
app.listen(3000,function (){
    console.log('Servidor rodando com express')
});
