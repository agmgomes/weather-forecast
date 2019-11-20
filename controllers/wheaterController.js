const wheaterProvider = require('../providers/wheaterProvider');

module.exports = {
  async getCity(req, res) {
    let { q } = req.params;

    try {
      let result = await wheaterProvider.getByCityName(q);
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
