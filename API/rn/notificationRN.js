var dao = require('../dao/notificationDAO');
var generates = require('../utils/generates');

exports.add = function(notificacao){
	dao.add(notificacao);
};

exports.listLast = function(amount, obj, callback){
	dao.listLast(Number(amount), obj, function(data){
		callback(data);
	});
};

exports.updatesOrInsert = function(callback){
	generates.indicator(function(resposta){
		dao.listLast(1, {descricaoGrupo: resposta.descricaoGrupo}, function(last){
			if(last[0] == undefined){
				dao.add(resposta);
				callback(null);
			}else{
				if(
					(last[0].data.getDate()!=resposta.data.getDate())
					||(last[0].data.getMonth()!=resposta.data.getMonth())
					||(last[0].data.getFullYear()!=resposta.data.getFullYear())){
				dao.add(resposta);
				callback(resposta);
			}else{
				callback(null);
			}
		}
	});
	});
};