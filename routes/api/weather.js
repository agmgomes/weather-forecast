const express = require('express');
const router = express.Router();
const weatherController = require('../../controllers/weatherController');

/**
 * route GET /wheater/:name
 * desc
 * access Public
 */
router.get('/:name', weatherController.getCity);

router.get('/cities/:query', weatherController.getSeveralCities);

module.exports = router;
