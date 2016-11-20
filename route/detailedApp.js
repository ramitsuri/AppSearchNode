var express = require('express');
var bodyParser = require('body-parser');
var helper = require('../helper/detailedApp.js');

var router = express.Router();

router.use(bodyParser.json());

//to get details for the apps installed on device
router.post('/get', function(request, response){
  var apps = request.body;
  helper.getAppDetails(apps, function(appDetails){
    response.send(appDetails);
  });
});

module.exports = router;