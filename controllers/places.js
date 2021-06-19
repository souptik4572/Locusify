const Place = require('../models/place');

// Getting new places form
const getNewPlaceForm = (req, res) => {
	res.render('newPlace', { isNewForm: true });
};

// Getting all the available places based on the query params
const getAllPlaces = async (req, res) => {
	const { name, location } = req.query;

	// Defining our find object to fetch data from mongo
	const findObject = {};
	if (name) findObject.name = name;
	if (location) findObject.location = location;

	try {
		const places = await Place.find(findObject);
		res.render('index', { places, isNewForm: false });
	} catch (error) {
		console.log('Oops got an error while finding all possible places');
	}
};

// Creating a new place
const createNewPlace = async (req, res) => {
	const { place } = req.body;
	try {
		const newPlace = await Place.create(place);
		res.redirect('/places');
	} catch (error) {
		console.log('Oops got an error while creating a new place');
	}
};

module.exports = {
	getNewPlaceForm,
	getAllPlaces,
	createNewPlace,
};
