const Joi = require('@hapi/joi');

module.exports = {
  nameValidation(name) {
    const schema = Joi.string().pattern(/^[a-zA-Z ]+$/);

    let validation = schema.validate(name);
    return validation;
  },

  citiesValidation(cities) {
    const schema = Joi.array().items(Joi.string().pattern(/^[a-zA-Z ]+$/));

    let validation = schema.validate(cities);
    return validation;
  }
};
