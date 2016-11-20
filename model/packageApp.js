var mongoose = require('mongoose');

var packageAppSchema = mongoose.Schema({
	packageName: String,
	detailed: { type: Boolean, default: false }
});

var packageApp = mongoose.model('packageApp', packageAppSchema);
exports.packageApp = packageApp;