const router = require('express').Router();
const {
	getNewPlaceForm,
	getUniqueAttributeData,
	getEditPlaceForm,
	editExistingPlace,
	deleteExistingPlace,
	getAllPlaces,
	createNewPlace,
} = require('../controllers/places');

router.get('/new', getNewPlaceForm);

router.get('/unique', getUniqueAttributeData);

router.get('/:id/edit', getEditPlaceForm);

router.put('/:id', editExistingPlace);

router.delete('/:id', deleteExistingPlace);

router.get('/', getAllPlaces);

router.post('/', createNewPlace);

module.exports = router;
