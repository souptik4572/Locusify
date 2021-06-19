const mongoose = require('mongoose');
const shortid = require('shortid');

const PlaceSchema = mongoose.Schema({
	_id: {
		type: String,
		default: shortid.generate,
	},
	name: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
});

const Place = mongoose.model('Place', PlaceSchema);

module.exports = Place;
