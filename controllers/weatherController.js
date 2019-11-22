const weatherProvider = require('../providers/weatherProvider');
const weatherValidator = require('../middlewares/validators/weatherValidator');

module.exports = {
  async getCity(req, res) {
    let { name } = req.params;

    let { error } = weatherValidator.nameValidation(name);
    if (error) {
      return res.status(400).json({
        error: {
          status: 400,
          msg: 'Please enter only letters'
        }
      });
    }

    try {
      let result = await weatherProvider.getByCityName(name);
      res.json(result);
    } catch (error) {
      res.status(404).json({
        error: {
          status: 404,
          msg: 'city not found'
        }
      });
    }
  },

  async getSeveralCities(req, res) {
    let { query } = req.params;
    const splited = query.split(',');
    console.log(splited);
    console.log(splited.length);

    let { error } = weatherValidator.citiesValidation(splited);
    if (error) {
      return res.status(400).json({
        error: {
          status: 400,
          msg: 'Please enter only letters'
        }
      });
    }

    const promises = splited.map(async city => {
      let apiCall = await weatherProvider.getByCityName(city);
      return apiCall;
    });

    const results = await Promise.all(promises);
    res.json(results);
  }
};
