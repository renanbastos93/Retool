exports.add = function(Model){
	Model.save(function(err, data){
		if (err){
			console.log("error: "+err);
		}
		if(!err){
			console.log("Cadastrado com sucesso!");
		}	
	});
};

exports.list = function(Model, Objeto, callback){
	Model.find(Objeto, function(err, data){
		if(err) console.log("error: "+err);
		if(!err){
			callback(data);
		}
	});
};

exports.listLast = function(Model, amount, obj, callback){
	var param = Object.keys(obj);
	var newObj = {};
	if(param[0] == undefined){
		newObj = {};
	}else{
		newObj[param[0]] = obj[param[0]];
	}
	Model.find(newObj).limit(amount).sort({$natural:-1}).exec(function(err, data){
		if(err) console.log("error: "+err);
		if(!err){
			callback(data);
		}
	});
};

exports.alter = function(Model, query, objeto, callback){
	Model.update(
		query,
		objeto,
		{upsert: true},
		function(err, data){
			if(err){
				callback(err);
			}else{
				callback(data);
			}
		});
};

exports.delete = function(Model, objeto, callback){
	Model.findOneAndRemove(conditions, [options], function(err, data){
		callback(data);
	});
};