function UsuariosDAO(connection){

    this._connection = connection()
}

/*Propriedade que contém uma função interna do objeto usuarioDAO*/
UsuariosDAO.prototype.inserirUsuario = function(usuario){
    console.log(usuario)
    this._connection.open(function(err,mongoClient){
        mongoClient.collection("usuarios", function(err,collection){
            collection.insert(usuario)

            mongoClient.close()
        })
    })
}

UsuariosDAO.prototype.autenticar = function(usuario, req, res){
    this._connection.open(function(err,mongoClient){
        mongoClient.collection("usuarios", function(err,collection){
            collection.find(usuario).toArray(function(err, result){
                if(result[0] != undefined){
                    req.session.autorizado = true
                    req.session.usuario = result[0].usuario
                    req.session.casa = result[0].casa
                }
                if(req.session.autorizado){
                    res.redirect("jogo")
                }else{
                    res.render("index",{validacao:{}})
                }
            })
            //collection.find({usuario: {$eq: dadosForm.usuario}, senha: {$eq: dadosForm.senha}})

            mongoClient.close()
        })
    })

}

module.exports = function(){
    return UsuariosDAO
}