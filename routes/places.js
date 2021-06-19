const router = require('express').Router();
const { getAllPlaces, createNewPlace } = require('../controllers/places');

router.get('/', getAllPlaces);

router.post('/', createNewPlace);

module.exports = router;
