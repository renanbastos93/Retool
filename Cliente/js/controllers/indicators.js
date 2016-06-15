angular.module('indicators', ['tokenService'])
.controller('indicatorsController', function($scope, $http, $rootScope, deviceToken){
	$scope.timeline = [];
	$scope.classe = "min-lines";
	$rootScope.qtdInd = 20;
	setTimeout(function(){
		var push = new Ionic.Push({
			"debug": true
		});
		var deviceInformation = ionic.Platform.device();

		push.register(function(token) {
			$rootScope.info = {token: token.token, deviceId: deviceInformation.uuid};
			verfifyToken(deviceInformation.uuid, token.token);
			$rootScope.qtdInd = Number(qtd(deviceInformation.uuid, token.token));
			push.saveToken(token);
		});
	}, 1950);
	//setTimeout(function(){}, 3000);
	var qtd = function(device, token){
		var parametros = "?device="+device+"&token="+token;
		$http.get("http://10.96.127.137:3000/token"+parametros).success(function(data){
			if(data.length > 0){
				return Number(data[0].qtdIndicadores);
			}else{
				return 20;
			}
		});
	};
	var verfifyToken = function(device, token){
		var parametros = "?device="+device+"&token="+token;
		$http.get("http://10.96.127.137:3000/token"+parametros).success(function(data){
			if(data.length > 0){
				$rootScope.qtdInd = Number(data[0].qtdIndicadores);
				$rootScope.configs = data[0];
			}else{
				informationDevice(device, token);
			}
		});
	};


	var informationDevice = function(device, token){
		var req = {
			method: 'POST',
			url: 'http://10.96.127.137:3000/tokens',                   
			data: {
				token: token, 
				deviceId: device
			}
		};
		deviceToken.setToken(req);
	};

	$scope.salvarConfigs = function(mudar, $rootScope){
		$rootScope.qtdInd = mudar.indicadores;
		var req = {
			method: 'POST',
			url: 'http://10.96.127.137:3000/tokens',                   
			data: {
				token: $rootScope.info.token, 
				deviceId: $rootScope.info.deviceId,
				qtdIndicadores: Number(mudar.qtdIndicatores),
				qtdNotification: Number(mudar.notification)
			}
		};
		deviceToken.setToken(req);
	};

	$scope.refresh = function(){
		return $http.get("http://10.96.127.137:3000/notifications").success(function(data){
			for(obj of data){
				dia = new Date(obj.data).getDate();
				atual = new Date().getDate();
				hora = new Date(obj.data).getTime() - new Date().getTime();
				hora = ((hora/3600000)*60)*(-1);
				hora = new Date(hora).getTime();
				if(dia == atual){
					if(hora > 60){
						var res = (hora/60);
						var minuto = res - (hora-(60*res));
						res = parseInt(res);
						minuto = parseInt(minuto);
						obj.postado = 'Há '+res+' h';
					}else{
						if(hora < 1){
							obj.postado = "Agora mesmo";
						}else
						obj.postado = 'Há '+hora+' minutos';
					}
				}else{
					obj.postado = new Date(obj.data);
				}
			}
			$scope.timeline = data;
		});
	};
	$scope.changeClass = function(id){
		var y = document.getElementsByTagName("card");
		if(id < 0) {
			for(e in y){
				if(y[e].id != id){
					y[e].className = "min-lines";
				}
			}
		}else{
			var x = document.getElementsByTagName("p");
			for(e in x){
				if(x[e].id != id){
					x[e].className = "min-lines";
				}
			}
			if(document.getElementById(id).className == "min-lines"){
				document.getElementById(id).className = "";	
			}else{
				document.getElementById(id).className = "min-lines";
			}
		}
	};

	$scope.doRefresh = function(){ 
		setTimeout(function(){
			$scope.refresh().finally(function() {
				$scope.$broadcast('scroll.refreshComplete');
			});
		}, 1500);
	};

})
;