module.exports.formulario_inclusao_noticia = function(application, req, res){
    res.render("admin/form_add_noticia", {validacao:{}, noticia:{}})
}

module.exports.noticias_salvar = function(application, req, res){
    var noticia = req.body
        console.log(noticia)

        req.assert('titulo','Titulo é obrigatorio').notEmpty()
        req.assert('resumo','resumo é obrigatorio').notEmpty()
        req.assert('resumo','resumo deve conter entre 10 e 100 caracteres').len(10,100)
        req.assert('autor','autor é obrigatorio').notEmpty()
        req.assert('data_noticia','data é obrigatorio').notEmpty().isDate({format:'YYYY-MM-DD'})
        req.assert('noticia','noticia é obrigatorio').notEmpty()

        var errors = req.validationErrors()

        console.log(errors)
        if(errors){
            res.render('admin/form_add_noticia', {validacao : errors, noticia: noticia})
            return
        }

        var connection = application.config.dbConnection()
        var noticiasModel = new application.app.models.NoticiasDAO(connection)

        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias')
        })
}