const Place = require('../models/place');

// Getting new places form
const getNewPlaceForm = (req, res) => {
	res.render('newPlace', { isNewForm: true });
};

// Getting edit places form
const getEditPlaceForm = async (req, res) => {
	const { id } = req.params;
	try {
		const place = await Place.findById(id);
		res.render('editPlace', { place, isNewForm: true });
	} catch (error) {
		console.log('Oops encountered an error while getting a particular place');
	}
};

const getUniqueAttributeData = async (req, res) => {
	const uniqueData = {};
	try {
		uniqueData.names = await Place.find().distinct('name');
		uniqueData.locations = await Place.find().distinct('location');
		res.send(uniqueData);
	} catch (error) {
		console.log('Oops got an error while fetching unique data');
	}
};

// Edit existing place
const editExistingPlace = async (req, res) => {
	const { id } = req.params;
	const { place } = req.body;
	try {
		const editedPlace = await Place.findByIdAndUpdate(id, place);
		res.redirect('/places');
	} catch (error) {
		console.log('Oops got an error while editing existing place');
	}
};

const deleteExistingPlace = async (req, res) => {
	const { id } = req.params;
	try {
		const deletedPlace = await Place.findByIdAndDelete(id);
		res.redirect('/places');
	} catch (error) {
		console.log('Oops got an error while deleting a particular place');
	}
};

// Getting all the available places based on the query params
const getAllPlaces = async (req, res) => {
	const { name, location } = req.query;

	// Defining our find object to fetch data from mongo
	const findObject = {};
	if (name) findObject.name = { $regex: name, $options: 'i' };
	if (location) findObject.location = { $regex: location, $options: 'i' };

	try {
		const places = await Place.find(findObject);
		console.log(places);
		res.render('index', {
			places,
			isNewForm: false,
			name: name ? name : '',
			location: location ? location : '',
		});
	} catch (error) {
		console.log('Oops got an error while finding all possible places', error);
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
	getUniqueAttributeData,
	getEditPlaceForm,
	editExistingPlace,
	deleteExistingPlace,
	getAllPlaces,
	createNewPlace,
};
