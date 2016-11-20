var mongoose = require('mongoose');
var model = require('../models/detailedApp.js');
var DetailedApp = model.detailedApp;

var addApps = function(apps, callback){
  DetailedApp.insertMany(apps,
    function(err, app){
      if(err) console.log(err);		
      callback(app);
    }
  )};