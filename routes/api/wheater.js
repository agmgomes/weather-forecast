const express = require('express');
const router = express.Router();
const wheaterController = require('../../controllers/wheaterController');

/**
 * route GET /wheater/:name
 * desc
 * access Public
 */
router.get('/:q', wheaterController.getCity);

module.exports = router;
