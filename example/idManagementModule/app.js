var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var generateUniqueId=require('id-management-module');
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/testIdModule', function(req,res,next){
 var keyRule1 = [{
  type: "static",
  value: "UNIQUEKEY"
}];
var keyRule1ID=generateUniqueId.generateID(keyRule1);
//CBT:with dynamic id
var keyRule2 = [{
   type: "static",
   value: "UNIQUEKEY"
 }, {
   type: "dynamic",
   value: "plantCode"
 }];
 var data={
  plantCode:"3001"
 };
 var keyRule2ID=generateUniqueId.generateID(keyRule2,data);

 //CBT:with currentDateTime
 var keyRule3 = [{
   type: "static",
   value: "UNIQUEKEY"
 }, {
   type: "dynamic",
   value: "plantCode"
 }, {
   type: "currdatetime",
   format: "%Y%m%d"
 }];
 var data={
  plantCode:"3001"
 };
 var keyRule3ID=generateUniqueId.generateID(keyRule3,data);

 //CBT:with user defined Date Time
 var keyRule4 = [{
  type: "static",
  value: "UNIQUEKEY"
}, {
  type: "dynamic",
  value: "plantCode"
}, {
  type: "userdatetime",
  format: "%Y%m%d",
  value:"2016-10-14"
}];
var data={
 plantCode:"3001"
};
var keyRule4ID=generateUniqueId.generateID(keyRule4,data);

  res.send("Generated Id With Static Data:"+keyRule1ID+"<br/>"+"Generated Id With Dynamic Data:"+keyRule2ID+"<br/>"+"Generated Id With currentDateTime Data:"+keyRule3ID+"<br/>"+"Generated Id With user Defined DateTime Data:"+keyRule4ID);


});
app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
