const weatherProvider = require('../providers/weatherProvider');
const weatherValidator = require('../middlewares/validators/weatherValidator');
const { ErrorHandler } = require('../middlewares/errors/error');

module.exports = {
  async getCity(req, res, next) {
    let { name } = req.params;

    let { error } = weatherValidator.nameValidation(name);
    if (error) {
      return next(new ErrorHandler(400, 'Please enter only letters'));
    }
    try {
      let result = await weatherProvider.getByCityName(name);
      res.json(result);
    } catch (error) {
      return next(new ErrorHandler(404, 'City not found'));
    }
  },

  async getSeveralCities(req, res, next) {
    /**
     * query is a string with several cities separated by a comma
     * splited returns an array with all the cities name
     * Example:
     * query = 'lisbon, london, moscow, porto'
     * splitted = ['lisbon', 'london', 'moscow', 'porto']
     */
    let { query } = req.params;
    const splited = query.split(',');

    if (splited.length < 3)
      return next(new ErrorHandler(400, 'Enter at least 3 cities'));

    if (splited.length > 10)
      return next(new ErrorHandler(400, 'Limit 10 cities'));

    let { error } = weatherValidator.citiesValidation(splited);
    if (error) {
      return next(new ErrorHandler(400, 'Please enter only letters'));
    }

    const weatherPromises = splited.map(async city => {
      let apiCall = await weatherProvider.getByCityName(city);
      return apiCall;
    });

    try {
      const result = await Promise.all(weatherPromises);
      res.json(result);
    } catch (error) {
      let { q } = error.config.params;
      return next(new ErrorHandler(404, `City ${q} not found`));
    }
  }
};
