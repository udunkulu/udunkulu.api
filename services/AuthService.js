const Joi = require('joi');

// validation
exports.validatePassword = async (data = {}) => {
  const schema = Joi.object({
    token: Joi.string().required(),
    password: Joi.string().min(6).max(60).required(),
    confirmPassword: Joi.ref('password')
  });

  const value = await schema.validateAsync(data);

  return value;
};
