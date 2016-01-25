var express = require('express'),
	config = require('./config'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	compress = require('compression'),
	session = require('express-session'),
	flash = require('connect-flash'),
	passport = require('passport');

module.exports = function(){
	var app = express();

	if(process.env.NODE_ENV === 'development'){
		app.use(morgan('dev'));
	} 
	else{
		app.use(compress());
	}

	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());

	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret
	}));

	app.use(flash());
	app.use(passport.initialize());
	app.use(passport.session());

	app.set('views', './app/views');
	app.set('view engine', 'ejs');

	app.use(express.static('./public'));

	require('../app/routes/index.server.route')(app);
	require('../app/routes/user.server.route')(app);

	return app;
};	