const { emit } = require("../../config/server")

module.exports.iniciaChat = function(application, req, res){
    var dadosForm = req.body

    console.log(dadosForm)
    req.assert('apelido', 'Nome é obrigatório').notEmpty()
    req.assert('apelido', 'Nome deve conter entre 3 e 15 caracteres').len(3,15)

    var errors = req.validationErrors()

    if(errors){
        res.render('index', {validacao : errors})
        //res.send('Exitem erros no formulario')
        return
    }

    //Manda msg para Cliente
    application.get('io').emit('msgParaCliente', 
    {apelido: dadosForm.apelido, mensagem: 'acabou de entrar no chat'})

    res.render('chat', {dadosForm: dadosForm})
}