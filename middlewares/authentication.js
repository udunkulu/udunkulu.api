/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/env');
const { User } = require('../models/user');

/**
 * Authenticate a user using the jsonwebtoken
 */
module.exports = async function auth(req, res, next) {
  const token = req.header('token');

  if (!token) return res.status(401).send({ success: false, message: 'Access Denied: Token not provided' });

  if (token.length <= 10) return res.status(401).send({ success: false, message: 'Access Denied: Invalid token' });

  const decoded = jwt.verify(token, SECRET);

  const user = await User.findById(decoded._id);
  if (!user) return res.status(409).send({ status: false, message: 'user not found or might have been deleted' });

  req.user = user;

  return next();
};
