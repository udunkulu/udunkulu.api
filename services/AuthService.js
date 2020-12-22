const Joi = require('joi');

// In the future all validation will be moved to validateService.js

/**
 * This validates password
 * @param {*} data - { password } to be validated
 *
 * @returns {*} { password } - that has been validated
 */
exports.validatePassword = async (data = {}) => {
  const schema = Joi.object({
    password: Joi.string().min(6).max(60).required()
  });

  const value = await schema.validateAsync(data);

  return value;
};

/**
 * Validate the string to be verified later as a jsonwebtoken
 * @param token - the string to be validated
 * @return {*} {token}
 */
exports.validateToken = async (token = '') => {
  const schema = Joi.object({
    token: Joi.string().min(10).trim().required()
  });

  const value = await schema.validateAsync(token);

  return value;
};

/**
 * This validates password with token (jsonwebtoken) string
 * @param {*} - { password, token }
 * @returns {*} - { password, token }
 */
exports.validatePasswordWithToken = async (data = {}) => {
  const { password } = await this.validatePassword({ password: data.password });
  const { token } = await this.validateToken({ token: data.token });

  return { password, token };
};
