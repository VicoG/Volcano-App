var volcanos = require('./../controllers/volcanos.js');


module.exports = function(app) {
    app.get('/data', function (req, res) {
    	console.log('model');
    	volcanos.show(req, res);
    });
	// app.post('/add', function(req,res){
	// 	console.log('help');
	// 	volcanos.create(req, res)
	// });

};



