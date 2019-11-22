const express = require('express');
const router = express.Router();
const weatherController = require('../../controllers/wheaterController');

/**
 * route GET /wheater/:name
 * desc
 * access Public
 */
router.get('/:name', weatherController.getCity);

module.exports = router;
