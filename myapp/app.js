"use strict";
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var mysql = require('mysql');
var multer = require('multer');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');

var app = express();


const DIR = './uploads';

var connection = mysql.createConnection({
	host	: 'mydatabaseinstance.cgx81sjimr75.us-east-2.rds.amazonaws.com',
	user 	: 'dan_f',
	password: 'McPpants520',
	database: 'dan_f'
});

connection.connect();

global.db = connection;

let storage = multer.diskStorage({
	destination: function(req, file, callback){
		callback(null, DIR);
	},
	filename: function(req, file, callback){
		callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
});

let upload = multer({storage: storage});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/home', homeRouter)
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
