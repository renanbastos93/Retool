angular.module('starter.controllers', ['tokenService'])

.controller('AppCtrl', function($scope, deviceToken) {
	setTimeout(function(){
		var push = new Ionic.Push({
			"debug": true
		});
		var deviceInformation = ionic.Platform.device();

		push.register(function(token) {
			$rootScope.info = {token: token.token, deviceId: deviceInformation.uuid};
			verfifyToken(deviceInformation.uuid, token.token);
			push.saveToken(token);
		});
	}, 1950);
	var verfifyToken = function(device, token){
		var parametros = "?device="+device+"&token="+token;
		$http.get("http://10.96.127.137:3000/token"+parametros).success(function(data){
			console.log("http://10.96.127.137:3000/token"+parametros);
			if(data.length > 0){
				$scope.qtdIndicadores = data[0].qtdIndicadores;
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

	$scope.salvarConfigs = function(mudar){
		qtd = mudar.indicadores;
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
})
;

