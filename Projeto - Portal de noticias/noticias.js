var http = require('http');

//essa função recebe dois parametros
//a partir do momento que recebemos uma requisição passamos uma resposta
var server = http.createServer( function (req,res){

    //quando pegamos o objeto 'req' e o atributo dele URL, estamos recuperando a infomação
    // da ´/' pra frente então atraves desse recurso podemos trabalhar com as possibilidades
    // de url dentro da nossa aplicação
    var categoria = req.url

    if (categoria == "/tecnologia"){
        res.end("<html><body> Noticias de Tecnologia </body></html>");    
    }else if (categoria == "/moda"){
        res.end("<html><body> Noticias de Moda </body></html>");
    }else if (categoria == "/beleza"){
        res.end("<html><body> Noticias de Beleza </body></html>");
    }else{
        res.end("<html><body> Portal de noticias </body></html>");
    }
}
);
server.listen(3000);
//O importante é entender que nós estamos recuperando uma requisição entrando no servidor
//e está requisição ela possui um atributo que é a nossa url, com base nisso damos um response
