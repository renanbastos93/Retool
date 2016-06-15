angular.module('getsFactory', [])
.factory('postTokenFactory', function($http) {
    return {
        enviaToken : function(token,deviceId){
            
            var data = {
                registrationId: token,
                deviceId:deviceId
            }

        //var url = "http://10.96.127.144:3000/api/devices";
        var url = "http://10.96.127.137:3000/tokens";
        var req = {
         method: 'POST',
         url: url,				   
         data: data
     }

     $http(req).then(function sucessCallback(response){				
        return response.data;
    }, function errorCallback(response){

        return response;
    });		
 }   
}
});