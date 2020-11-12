const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/env');

module.exports = function auth(req, res, next) {
  const token = req.header('token');

  const message = 'Access Denied. May be token was not provided.';
  if (!token) return res.status(401).send(message);

  const decoded = jwt.verify(token, SECRET);
  req.user = decoded;

  return next();
};
