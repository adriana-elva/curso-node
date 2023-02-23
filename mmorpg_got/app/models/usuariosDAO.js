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

module.exports = function(){
    return UsuariosDAO
}