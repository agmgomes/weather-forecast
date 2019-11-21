const express = require('express');
const router = express.Router();
const wheaterController = require('../../controllers/wheaterController');

/**
 * route GET /wheater/:name
 * desc
 * access Public
 */
router.get('/:name', wheaterController.getCity);

module.exports = router;
