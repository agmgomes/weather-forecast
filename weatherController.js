const wheaterProvider = require('../providers/wheaterProvider');
const wheaterValidator = require('../middlewares/validators/wheaterValidator');

module.exports = {
  async getCity(req, res) {
    let { name } = req.params;

    let { error } = wheaterValidator.nameValidation(name);
    if (error) {
      return res.status(400).json({
        error: {
          status: 400,
          msg: 'Please enter only letters'
        }
      });
    }

    try {
      let result = await wheaterProvider.getByCityName(name);
      res.json(result);
    } catch (error) {
      res.status(404).json({
        error: {
          status: 404,
          msg: 'city not found'
        }
      });
    }
  }
};
