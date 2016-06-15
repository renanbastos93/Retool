module.exports = {
	attrs: {
		token: String,
		device: String,
		qtdIndicatores: Number,
		notification: Number
	},
	construct: function(token, device, qtdIndicatores, notification){
		this.attrs.token = token;
		this.attrs.device = device;
		this.attrs.qtdIndicatores = qtdIndicatores;
		this.attrs.notification = notification;
	},
	setDevice: function(value){
		this.device = value;
	},
	setToken: function(value){
		this.token = value;
	},
	setIndicators: function(value){
		this.qtdIndicatores = value;
	},
	setNotification: function(value){
		this.notification = value;
	},
	getDevice: function(){
		return this.device;
	},
	getToken: function(){
		return this.token;
	},
	getTopIndicators: function(){
		return this.qtdIndicatores;
	},
	getNotification: function(){
		return this.notification;
	},
	destruct: function(){
		this.device = '';
		this.token = '';
		this.attrs.qtdIndicatores = '';
		this.attrs.notification = '';
	}
};