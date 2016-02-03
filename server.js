// test change

// var http = require('http');

// http.createServer(function(req,res){
// 	res.writeHead(200 , {
// 		'Content-Type': 'text/plain'
// 	});
// 	res.end('Hello World');
// }).listen(3000);

// var express = require('express');
// var app = express();
// // var logger = function(req , res, next) {
// // 	console.log(req.method, req.url);
// // 	next();
// // };

// var hello = function(req, res, next) {
// 	// res.setHeader('Content-Type','text/plain');
// 	// res.end('Hello world');
// 	res.send('Hello World');
// };

// // var goodbyeWorld = function(req, res, next) {
// // 	res.setHeader('Content-Type','text/plain');
// // 	res.end('Goodbye world');
// // };

// // app.use(function(req, res, next){
// // 	// middleware
// // 	res.setHeader('Content-Type','text/plain');
// // 	res.end('Hello world');
// // });
// // app.use(logger);
// // app.use('/hello',helloWorld);
// // app.use('/goodbye', goodbyeWorld);
// app.use('/',hello);

// app.listen(3000);
// console.log('Server running at http://localhost:3000');

// module.exports = app;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');
// โหลด mongoose ให้เสร็จก่อนอย่างอื่น
var db = mongoose(); // return mongoose.connect(config.mongoUri);
var app = express();
var passport = passport();
app.listen(3000);

module.exports = app;

// var mongoose = require('mongoose');
// var uri = 'mongodb://localhost/my-project';
// var db = mongoose.connect(uri);

console.log('Server2 running at http://localhost:3000'+process.env.NODE_ENV);
