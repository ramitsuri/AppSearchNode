var express = require('express');
var mongoose = require('mongoose');

var detailedAppRoutes = require('./routes/playStoreApp.js');
var packageAppRoutes = require('./routes/playStoreApp.js');

var app = express();
var ipAddress = "localhost:27017";
var dbName = "appSearch";
var port = 1398;

mongoose.connect('mongodb://' + ipAddress + '/' + dbName + '');

app.use('/detail', detailedAppRoutes);
app.use('/package', packageAppRoutes);
app.listen(port);
console.log("starting on port: " + port);