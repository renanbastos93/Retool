var db = require('../utils/conexao');
var crud = require('../persistence/crudGenerico');

var schema = new db.Schema({
	device: String,
	token: String,
	qtdIndicatores: Number,
	notification: Number
});

var Model = db.model('tokens', schema, 'tokens');

exports.add = function(Objeto){
	bean = new Model(Objeto);
	crud.add(bean);
};

exports.alter = function(objeto, callback){
	var query = {
		device: objeto.device
	}
	var obj = {
		qtdIndicatores: Number(objeto.qtdIndicatores),
		notification: Number(objeto.notification)
	}
	console.log(query, obj);
	crud.alter(Model, query, obj, function(res){
		callback(res);
	});
}

exports.list = function(objeto, callback){
	crud.list(Model, objeto, function(data){
		callback(data);
	});
};

