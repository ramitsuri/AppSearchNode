var mongoose = require('mongoose');
var model = require('../models/detailedApp.js');
var DetailedApp = model.detailedApp;

var getAppDetails = function(apps, callback){
  Duty.find({packageName: {$in: apps}},
    function(err, appDetails){
      if(err) console.log(err);	  
      callback(appDetails);
    }
  )};

module.exports = {
  getAppDetails: getAppDetails
}