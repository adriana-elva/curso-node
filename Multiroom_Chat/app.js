/*Importar as configurações do servidor*/
var app = require('./config/server')

/*parametrizar a porta de escuta */
var server = app.listen(8080,function (){
    console.log('Servidor OK')
});

var io = require('socket.io').listen(server)

app.set('io', io)

/*Criar a conexao por websocket */
io.on('connection', function(socket){
   
    console.log('usuario conectou')

    socket.on('disconnect', function(){
        console.log('Usuario desconectou')
    })

    socket.on('msgParaServidor', function(data){
        //dialogo
        socket.emit('msgParaCliente', 
        {apelido: data.apelido, mensagem: data.mensagem})

        socket.broadcast.emit('msgParaCliente', 
        {apelido: data.apelido, mensagem: data.mensagem})

        // participantes
        if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
            socket.emit('participanteParaCliente', 
            {apelido: data.apelido})
    
            socket.broadcast.emit('participanteParaCliente', 
            {apelido: data.apelido})
        }
    })
})