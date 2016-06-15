var mongoose = require('mongoose');
var db = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/retool');

db.on('error', console.error);
db.once('open', function() {
	console.log("Conectou ao MongoDB!");
});
module.exports = mongoose;