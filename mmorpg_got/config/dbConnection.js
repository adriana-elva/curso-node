//importar mongoDB
var mongo = require('mongodb')

var connMongoDB = function(){
    var db = new mongo.Db(
        'got', //String do nome do banco de dados
        new mongo.Server(
            'localhost', //String contendo o servidor 
            27017,//porta de conexão
            {}
        ),
        {}
    )
    return db

}

module.exports = function(){
    return connMongoDB
}