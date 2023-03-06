module.exports = function(application){
	application.get('/', function(req, res){
		//res.send('Bem vindo a sua app NodeJS!');
		application.app.controllers.index.index(application, req, res)
	})

	application.post('/autenticar', function(req, res){
		//res.send('Autenticado')
		application.app.controllers.index.autenticar(application, req, res)
		
	})
}