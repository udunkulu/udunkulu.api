const Joi = require('joi');

/**
 * validated an email address
 */
exports.validateEmail = async (email) => {
  // email schema
  const schema = Joi.object({
    email: Joi.string().email().trim().lowercase()
      .required()
  });

  const value = await schema.validateAsync(email);

  return value;
};
