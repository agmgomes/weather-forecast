const Joi = require('@hapi/joi');

module.exports = {
  nameValidation(name) {
    const schema = Joi.string().pattern(/^[a-zA-Z]+$/);

    let validation = schema.validate(name);
    return validation;
  }
};
