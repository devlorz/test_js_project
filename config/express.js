var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var sass = require('node-sass-middleware');
var validator = require('express-validator');
// var cookieSession = require('cookie-session');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport');
// var RedisStore = require('connect-redis')(session);

module.exports = function() {
	var app = express();
	var config = require('./config');
	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else {
		app.use(compression);
	}
	// cookie-session
	// app.use(cookieSession({
	// 	name: 'session',
	// 	keys: ['secret_key1','secret_key2']
	// }));
	// express-session
	app.use(session({
		secret: config.sessionSecret,//'secret_key',
		resave: false,
		saveUninitialized: true
	}));
	// ใช้ flash ก่อน passport
	app.use(flash());
	// passport
	app.use(passport.initialize());
	app.use(passport.session());
	// RedisStore
	// app.use(session({
	// 	store: new RedisStore({
	// 		host: 'localhost',
	// 		post: 6379,
	// 		db: 2,
	// 		pass: 'redis_password'
	// 	}),
	// 	secret: 'secret_key'
	// }));
	// bodyParser
	// รองรับ application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({
		extended: true
		// true ประเภทใดก็ได้ , false รองรับแค่ string, array
	}));
	// รองรับ application/json
	app.use(bodyParser.json());
	// validator ใส่ต่อ bodyParser ทันที
	app.use(validator());
	// view
	app.set('views','./app/views');
	app.set('view engine','jade');
	// route
	require('../app/routes/index.routes')(app);
	require('../app/routes/user.routes')(app);
	// sass ต้องเอาไว้ก่อน express.static เพื่อคอมไพล์ก่อนส่ง response
	app.use(sass({
		src: './sass',
		dest: './public/css',
		outputStyle: 'expanded', // compressed compacted or expanded
		prefix: '/css',
		indentedSyntax: true,
		debug: true
	}));
	// ไฟล์ static , ไว้หลัง routing เพื่อความเร็ว
	app.use(express.static('./public'));

	return app;
};
