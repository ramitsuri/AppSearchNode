var express = require('express');
var bodyParser = require('body-parser');
var helper = require('../helper/packageApp.js');

var router = express.Router();

router.use(bodyParser.json());

//to send a list of apps that are newly installed
router.post('/', function(request, response){
  var apps = request.body;
  helper.addApps(apps, function(data){
    response.send(data);
  });
});

module.exports = router;