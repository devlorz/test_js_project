module.exports = function(app) {
	var index = require('../controllers/index.controller');
	app.get('/',index.render);
	app.post('/',index.render);
	// app.put('/',index.render);
	// app.delete('/',index.render);
	// app.all('/',index.render);;
	// app.route('/').get(index.render).post(index.other);
};