const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/env');

/**
 * Authenticate a user using the jsonwebtoken
 */
module.exports = function auth(req, res, next) {
  const token = req.header('token');

  if (!token) return res.status(401).send({ success: false, message: 'Access Denied: Token not provided' });

  if (token.length <= 10) return res.status(401).send({ success: false, message: 'Access Denied: Invalid' });

  const decoded = jwt.verify(token, SECRET);
  req.user = decoded;

  return next();
};
