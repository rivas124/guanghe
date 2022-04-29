var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var logger = require('morgan');
// Import routes and interfaces.
var loginRouter = require('./routes/login')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register')
var apiRouter = require('./routes/api')

var getUserInfoRouter = require('./routes/getUserInfo')
var updatePwdRouter = require('./routes/updatePwd')
var updateAppRouter = require('./routes/updateApplication')
var updateNotiRouter = require('./routes/updateNotification')


const {process_params} = require("express/lib/router");
const bodyParser = require('body-parser');
var app = express();

// Allow cross-domain /
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  if(req.method==="OPTIONS") res.send(200);
  else  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.send('Helldo World!')
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Configure the new route.
app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use('/login',loginRouter)
app.use('/register',registerRouter)
app.use('/api',apiRouter)

app.use('/getUserInfo',getUserInfoRouter)
app.use('/updatePwd',updatePwdRouter)
app.use('/updateApp',updateAppRouter)
app.use('/updateNoti',updateNotiRouter)

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
