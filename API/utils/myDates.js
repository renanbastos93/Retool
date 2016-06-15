exports.convertDate = function(d){
	var data = new Date(d),
    dia = data.getDate(),
    mes = data.getMonth() + 1,
    ano = data.getFullYear();
  	return [ano, mes, dia].join('-');
};

exports.convertDateBR = function(d){
	var data = new Date(d),
    dia = data.getDate(),
    mes = data.getMonth() + 1,
    ano = data.getFullYear();
  	return [dia, mes, ano].join('-');
};