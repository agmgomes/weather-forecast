const axios = require('axios');
const config = require('config');

module.exports = {
  async getByCityName(name) {
    const url = config.get('apiURL');
    const units = config.get('apiUnits');
    const APPID = config.get('apiAPPID');

    try {
      let { data: result } = await axios.get(url, {
        params: {
          q: name,
          units,
          APPID
        }
      });

      var { name, id, main, sys } = result;

      /**
       * sys.sunrise & sys.sunset are UNIX timestamps in seconds
       * multplying by 1000 because JavaScript works in miliseconds
       */
      let sunrise = new Date(sys.sunrise * 1000);
      let sunset = new Date(sys.sunset * 1000);

      let weatherInfo = [
        {
          name,
          id,
          country: sys.country,
          temp: main.temp,
          sunrise:
            sunrise.getHours() +
            ':' +
            (sunrise.getMinutes() < 10 ? '0' : '') +
            sunrise.getMinutes(),
          sunset:
            sunset.getHours() +
            ':' +
            (sunset.getMinutes() < 10 ? '0' : '') +
            sunset.getMinutes()
        }
      ];
      return weatherInfo;
    } catch (error) {
      throw error;
    }
  }
};
