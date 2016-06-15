var express 		= require('express'),
bodyParser 		= require('body-parser'),
token = require('./model/Token'),
notification = require('./model/Notification'),
tokenRN = require('./rn/tokenRN'),
notificationRN = require('./rn/notificationRN'),
push = require('./utils/pushConfig'),
app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(function(req, res, next){
	res.append('Access-Control-Allow-Origin', '*');
	res.append('Access-Control-Allow-Methods', ['GET', 'OPTIONS', 'PUT', 'POST']);
	res.append('Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

notification.construct("loja", "A Loja do iguatemi!", "56fd308d71836a3a47d5ede4", new Date(), 1, "media_4_ultimas_semanas", "vendas", 22000.0000000000000000, 20000.0000000000000000, "A Loja do Iquatemi superou as vendas", "A loja vem vendendo com muita eficiencia as venda, "+
				"A loja vem vendendo com muita eficiencia as venda, "+
				"A loja vem vendendo com muita eficiencia as venda, "+
				"A loja vem vendendo com muita eficiencia as venda!!!");
notificationRN.add(notification.attrs);/**/


setInterval(function(){
	notificationRN.updatesOrInsert(function(dados){
		if(dados != null){
			tokenRN.list({}, function(tokens){
				push.Send(tokens, dados);
			});
		}
	});
}, 1950);
/**/
//600000

//Math.floor((Math.random() * 10000) + 1)*60
//Math.floor((Math.random() * 10000) + Math.random())*60/



app.get('/notifications', function(req, res){
	notificationRN.listLast(req.params.amount, {}, function(data){
		res.send(data);
	});
});

app.get('/notifications/:amount', function(req, res){
	notificationRN.listLast(req.params.amount, {}, function(data){
		res.send(data);
	});
});

app.post('/tokens', function(req, res){
	var qtd = (req.body.qtdIndicadores == undefined) ? 0 : req.body.qtdIndicadores;
	var notify = (req.body.qtdNotification == undefined) ? 0 : req.body.qtdNotification;
	token.construct(req.body.token, req.body.deviceId, Number(qtd), Number(notify));
	tokenRN.add(token.attrs, function(resposta){
		console.log(resposta);
	});/**/
});

app.get('/teste', function(req, res){
	token.construct("teste2", "asa2", 17, 33);
	tokenRN.add(token.attrs, function(resposta){
		res.send(resposta);
	});
});


app.get('/tokens/lists', function(req, res){
	tokenRN.list({}, function(data){
		res.send(data);
	});
});

app.get('/token', function(req, res){
	obj = {};
	obj.device = req.query.device;
	obj.token = req.query.token;
	obj.param = (obj.device == 'undefined') ? obj.param = {token: obj.token} : obj.param = {device: obj.device};

	tokenRN.list(obj.param, function(data){
		res.send(data);
	});
});

app.listen(3000, function () {
	console.log('WebServicie Iniciou');
});