const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret code'));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: 'secret code',
    cookie: {
      httpOnly: true,
      secure: false,
    },
  }),
);
app.use(flash());

app.use((req, res, next) => {
  console.log('first');
  next();
});

app.use((req, res, next) => {
  console.log('second');
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// 404 NOT FOUNC
app.use((req, res, next) => {
  res.status(404).send('NOT FOUND');
});

// 500 Error
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
