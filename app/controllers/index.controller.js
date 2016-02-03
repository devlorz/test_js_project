exports.render = function(req, res) {
	// res.send('Hello World');
	// var isLoggedIn = false;
	//
	// if (typeof req.session.remember !== 'undefined') {
	// 	isLoggedIn = req.session.remember;
	// }
	//
	// console.log('session = ' + req.session.remember);

	res.render('index', {
		title: 'Hello World',
		username: req.user ? req.user.username : ''
		// isLoggedIn: isLoggedIn
	});
};
