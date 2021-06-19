const router = require('express').Router();
const { getNewPlaceForm, getAllPlaces, createNewPlace } = require('../controllers/places');

router.get('/new', getNewPlaceForm);

router.get('/', getAllPlaces);

router.post('/', createNewPlace);

module.exports = router;
