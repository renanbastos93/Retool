var dao = require('../dao/tokensDAO');

exports.add = function(token, callback){
	if(token.device != undefined){
		dao.list({device: token.device}, function(device){
			var obj = token;
			console.log("device");
			console.log(device[0]);
			console.log("device");
			if(device.length>0){
				
				dao.alter(obj, function(resposta){
					callback(resposta);
				});
			}else{
				dao.add(obj);
				callback("cadastrou");
			}
		});
	}else{
		//dao.add(token);
		callback(token);
	}
};

exports.list = function(obj, callback){
	dao.list(obj, function(data){
		callback(data);
	});
};