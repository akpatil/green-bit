process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose');
var passport = require('./config/passport');
var express = require('./config/express');
var db = mongoose();
var passport = passport();
var app = express();
app.listen(3000);
console.log('Server is running on 3000...');