//** include all required libraries and files
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var router = require("./router");
var con = require("./constants");

//** Set bodyParser to support incoming request body (both encoded url and json)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//** start server at port 3500
app.listen(3500);
console.log("Started listening at port 3500");

//** tell server to use configured route
router.route(app);