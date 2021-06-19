const Place = require('../models/place');

const getAllPlaces = async (req, res) => {
	const { name, location } = req.query;

	// Defining our find object to fetch data from mongo
	const findObject = {};
	if (name) findObject.name = name;
	if (location) findObject.location = location;

	try {
		const places = await Place.find(findObject);
		res.send(places);
	} catch (error) {
		console.log('Oops got an error while finding all possible places');
	}
};

const createNewPlace = async (req, res) => {
	const { place } = req.body;
	try {
		const newPlace = await Place.create(place);
		// res.redirect('/places');
		res.send(newPlace);
	} catch (error) {
		console.log('Oops got an error while creating a new place');
	}
};

module.exports = {
	getAllPlaces,
	createNewPlace,
};
