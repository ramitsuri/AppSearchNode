var mongoose = require('mongoose');

var appDetailSchema = mongoose.Schema({
	packageName: String,
	label: String,
	keywordsFromDescription: [{
        word: String,
        count: Number
    }],
	keywordsFromUsers: [{
        word: String,
        count: Number
    }],
    category: String
});

var detailedApp = mongoose.model('detailedApp', appDetailSchema);
exports.detailedApp = detailedApp;