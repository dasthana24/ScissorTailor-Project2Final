var express = require('express');

var path = require('path');

var favicon = require('serve-favicon');

var logger = require('morgan');

var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');

var expressHbs = require('express-handlebars');

var mongoose = require('mongoose');

var session = require('express-session');

var passport = require('passport');

var flash = require('connect-flash');

var validator = require('express-validator');

var MongoStore = require('connect-mongo')(session);



var routes = require('./routes/index');

var userRoutes = require('./routes/user');



var app = express();



//mongoose.connect('192.168.56.108:27017/shopping');
var databaseUri = mongoose.connect('mongodb://mynewuser:myuser1234@ds263520.mlab.com:63520/heroku_820grfdl');

if (process.env.MONGODB_URI)
{
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
}

var db = mongoose.connection;
db.on('error', function(err){
  console.log('Mongoose error:' , err);

});
db.once('open', function(){
  console.log("Mongoose connection successfully");

});

require('./config/passport');



// view engine setup

app.engine('.hbs', expressHbs({
  defaultLayout: 'layout',
  extname: '.hbs'
}));

app.set('view engine', '.hbs');



// uncomment after placing your favicon in /public

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(validator());

app.use(cookieParser());

app.use(session({

  secret: 'mysupersecret',

  resave: false,

  saveUninitialized: false,

  store: new MongoStore({
    mongooseConnection: mongoose.connection
  }),

  cookie: {
    maxAge: 180 * 60 * 1000
  }

}));

app.use(flash());

app.use(passport.initialize());

app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));



app.use(function (req, res, next) {

  res.locals.login = req.isAuthenticated();

  res.locals.session = req.session;

  next();

});



app.use('/user', userRoutes);


app.use('/', routes);

// app.use('/home/shop',blouseRoutes);


// catch 404 and forward to error handler

app.use(function (req, res, next) {

  var err = new Error('Not Found');

  err.status = 404;

  next(err);

});



// error handlers



// development error handler

// will print stacktrace

if (app.get('env') === 'development') {

  app.use(function (err, req, res, next) {

    res.status(err.status || 500);

    res.render('error', {

      message: err.message,

      error: err

    });

  });

}



// production error handler

// no stacktraces leaked to user

app.use(function (err, req, res, next) {

  res.status(err.status || 500);

  res.render('error', {

    message: err.message,

    error: {}

  });

});





module.exports = app;