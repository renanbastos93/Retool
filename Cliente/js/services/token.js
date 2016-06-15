angular.module('tokenService', [])
.service('deviceToken', function($http, $rootScope){  
		this.setToken = function(req){
			$http(req).then(function success(res){
				console.log("ok passou!");
				return 'cadastrou token ' + JSON.stringify(res);

			}, 
			function err(errr){
				console.log("fudeu não passou!"+errr.toString());
				return 'erro de aplicacao contrate o fornecedor';
			});
		}; 
});