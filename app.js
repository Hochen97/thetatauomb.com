var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// CDN Magic
var CDN = "https://jrhtec.sfo2.cdn.digitaloceanspaces.com/thetatauomb/public/";

app.locals.CDN = function(path, type, classes, alt) {
  if(type == 'js') {
     return "<script src='"+CDN+path+"' type='text/javascript'></script>"; 
  } else if (type == 'css') { 
     return "<link rel='stylesheet' type='text/css' href='"+CDN+path+"'/>"; 
  } else if (type == 'img') { 
     return "<img class='"+classes+"' src='"+CDN+path+"' alt='"+alt+"' />"; 
  } else { 
     return ""; 
  } 
};

/*

// CSS
<%- CDN('/stylesheets/main.min.css', 'css', '', ''); %>

// image
<%- CDN('/images/dummy-image.png', 'img', 'img-responsive', 'my picture'); %>

// JavaScript
<%- CDN('/javascript/load.js', 'js', '', ''); %>

*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
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
