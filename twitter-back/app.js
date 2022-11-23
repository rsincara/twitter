var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var usersRouter = require('./routes/users');
var twitsRouter = require('./routes/twits');
var cors = require('cors')

var app = express();

const whitelist = ["http://localhost:4000"];
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
}
app.use(cors(corsOptions))

app.use(logger('dev'));
app.use(express.json());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// adding header for check nginx server name
app.use(function (req, res, next) {
    res.append('Server_name', process.env.name);
    next();
})

app.use('/users', usersRouter);
app.use('/twits', twitsRouter);

module.exports = app;
