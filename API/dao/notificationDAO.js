var db = require('../utils/conexao');
var crud = require('../persistence/crudGenerico');

var schema = new db.Schema({
	tipoGrupo: String,
	descricaoGrupo: String,
	idEmpresa: String,
	data: Date,
	tendencia: Number,
	indicador: String,
	tipoDadosComparacao: String,
	valor: Number,
	valorComparacao: Number,
	titulo: String,
	corpo: String
});

var Model = db.model('notifications', schema, 'notifications');
//var NewModel = db.model('notifications', newSchema, 'notifications');

exports.add = function(Objeto){
	bean = new Model(Objeto);
	crud.add(bean);
};

exports.listLast = function(amount, obj, callback){
	crud.listLast(Model, amount, obj, function(data){
		callback(data);
	});
};