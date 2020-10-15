const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/env');

module.exports = function auth(req, res, next) {
  const token = req.header('token');

  if (!token) return res.status(401).send('Access Denied');

  const decoded = jwt.verify(token, SECRET);
  req.user = decoded;

  return next();
};
