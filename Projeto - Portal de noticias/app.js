var app = require('./config/server');
//var msg = require('./modeTeste')();


//esse metodo escuta requisições em uma determinada porta
//Passamos um callback, função por parametro para que ele executa na subida do servidor
app.listen(3000,function (){
    console.log('Servidor OK')
});
